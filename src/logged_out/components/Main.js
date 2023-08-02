import React, { memo, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import AOS from "aos/dist/aos";
import withStyles from '@mui/styles/withStyles';
import NavBar from "./navigation/NavBar";
import Footer from "./footer/Footer";
import "aos/dist/aos.css";
import CookieRulesDialog from "./cookies/CookieRulesDialog";
import CookieConsent from "./cookies/CookieConsent";
import dummyBlogPosts from "../dummy_data/blogPosts";
import Routing from "./Routing";
import smoothScrollTop from "../../shared/functions/smoothScrollTop";

AOS.init({ once: true });

const styles = (theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.white,
    overflowX: "hidden",
  },
});

function Main(props) {
  const { classes } = props;
  const [selectedTab, setSelectedTab] = useState(null);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [isCookieRulesDialogOpen, setIsCookieRulesDialogOpen] = useState(false);

  const selectHome = useCallback(() => {
    smoothScrollTop();
    document.title =
      "SampleSaas -  a SaaS application";
    setSelectedTab("Home");
  }, [setSelectedTab]);

  const selectBlog = useCallback(() => {
    smoothScrollTop();
    document.title = "SampleSaas - Blog";
    setSelectedTab("Blog");
  }, [setSelectedTab]);

  const handleMobileDrawerOpen = useCallback(() => {
    setIsMobileDrawerOpen(true);
  }, [setIsMobileDrawerOpen]);

  const handleMobileDrawerClose = useCallback(() => {
    setIsMobileDrawerOpen(false);
  }, [setIsMobileDrawerOpen]);



  const fetchBlogPosts = useCallback(() => {
    const blogPosts = dummyBlogPosts.map((blogPost) => {
      let title = blogPost.title;
      title = title.toLowerCase();
      /* Remove unwanted characters, only accept alphanumeric and space */
      title = title.replace(/[^A-Za-z0-9 ]/g, "");
      /* Replace multi spaces with a single space */
      title = title.replace(/\s{2,}/g, " ");
      /* Replace space with a '-' symbol */
      title = title.replace(/\s/g, "-");
      blogPost.url = `/blog/post/${title}`;
      blogPost.params = `?id=${blogPost.id}`;
      return blogPost;
    });
    setBlogPosts(blogPosts);
  }, [setBlogPosts]);

  const handleCookieRulesDialogOpen = useCallback(() => {
    setIsCookieRulesDialogOpen(true);
  }, [setIsCookieRulesDialogOpen]);

  const handleCookieRulesDialogClose = useCallback(() => {
    setIsCookieRulesDialogOpen(false);
  }, [setIsCookieRulesDialogOpen]);

  useEffect(fetchBlogPosts, [fetchBlogPosts]);

  return (
    <div className={classes.wrapper}>
      {!isCookieRulesDialogOpen && (
        <CookieConsent
          handleCookieRulesDialogOpen={handleCookieRulesDialogOpen}
        />
      )}
      <CookieRulesDialog
        open={isCookieRulesDialogOpen}
        onClose={handleCookieRulesDialogClose}
      />
      <NavBar
        selectedTab={selectedTab}
        selectTab={setSelectedTab}
        mobileDrawerOpen={isMobileDrawerOpen}
        handleMobileDrawerOpen={handleMobileDrawerOpen}
        handleMobileDrawerClose={handleMobileDrawerClose}
      />
      <Routing
        blogPosts={blogPosts}
        selectHome={selectHome}
        selectBlog={selectBlog}
      />
      <Footer />
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Main));
