import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import withStyles from "@mui/styles/withStyles";

import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import { thriveSignupUrl } from "../../../constants";

function NavBar(props) {
  const {
    classes,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab,
  } = props;
  const menuItems = [
    {
      link: "/",
      name: "Home",
      icon: <HomeIcon className="text-white" />,
    },
    {
      link: "/blog",
      name: "Blog",
      icon: <BookIcon className="text-white" />,
    },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a
              href="#"
              className="-m-1.5 p-1.5 flex gap-2 justify-center items-center font-semibold"
            >
              <img className="h-8 w-auto" src="/brand_logo.png" alt="" />
              <span>BookMyCalendar</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {menuItems.map((element) => {
              if (element.link) {
                return (
                  <Link
                    key={element.name}
                    to={element.link}
                    onClick={handleMobileDrawerClose}
                  >
                    <button
                      color="secondary"
                      size="large"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      {element.name}
                    </button>
                  </Link>
                );
              }
              return (
                <button
                  color="secondary"
                  size="large"
                  onClick={element.onClick}
                  key={element.name}
                >
                  {element.name}
                </button>
              );
            })}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login <span aria-hidden="true">→</span>
            </a>
            <a
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              href={thriveSignupUrl}
              target={"_blank"}
              onClick={handleMobileDrawerClose}
            >
              Signup
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span>BookMyCalendar</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {menuItems.map((element) => {
                    if (element.link) {
                      return (
                        <Link
                          key={element.name}
                          to={element.link}
                          onClick={handleMobileDrawerClose}
                        >
                          <button
                            color="secondary"
                            size="large"
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {element.name}
                          </button>
                        </Link>
                      );
                    }
                    return (
                      <button
                        color="secondary"
                        size="large"
                        onClick={element.onClick}
                        key={element.name}
                      >
                        {element.name}
                      </button>
                    );
                  })}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
};

export default NavBar;
