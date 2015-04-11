/* global jasmine, describe, expect, beforeEach, it */
define([
    "jquery",
    "jasmine-jquery",
    "navigation"
], function ($) {
    "use strict";

    describe("After the page was loaded,", function () {
        beforeEach(function () {
            init();
        });

        describe("an element with class header-nav-dropdown-gap", function () {
            it("has been added inside the first list item of each dropdown", function () {
                $(".header-main-nav-dropdown").each(function () {
                    expect(getGapElement(this)).toHaveLength(1);
                });
            });
        });

        describe("and I click on the hamburger menu toggle", function () {
            beforeEach(function () {
                clickHamburgerMenuToggle();
            });

            describe("the nav element", function () {
                it("has class is-open", function () {
                    expect($(".js-header-nav")).toHaveClass("is-open");
                });
            });

            describe("and I click it once more", function () {
                beforeEach(function () {
                    clickHamburgerMenuToggle();
                });

                describe("the nav element", function () {
                    it("does not have class is-open", function () {
                        expect($(".js-header-nav")).not.toHaveClass("is-open");
                    });
                });

            });
        });

        describe("and I touch on the hamburger menu toggle", function () {
            beforeEach(function () {
                touchHamburgerMenuToggle();
            });

            describe("the nav element", function () {
                it("has class is-open", function () {
                    expect($(".js-header-nav")).toHaveClass("is-open");
                });
            });

            describe("and I touch it once more", function () {
                beforeEach(function () {
                    touchHamburgerMenuToggle();
                });

                describe("the nav element", function () {
                    it("does not have class is-open", function () {
                        expect($(".js-header-nav")).not.toHaveClass("is-open");
                    });
                });

            });
        });

        describe("and I click on a meta action item that has a dropdown", function () {
            beforeEach(function () {
                clickMetaActionWithDropdown();
            });
            describe("the meta action's list element", function () {
                it("has class dropdown-is-open", function () {
                    expect(getMetaActionListItemWithDropdown()).toHaveClass("dropdown-is-open");
                });
                it("does not contain an I element with class gicon-submenu-open-s", function () {
                    expect(getMetaActionListItemWithDropdown().find("i.gicon-submenu-open-s")).toHaveLength(0);
                });
                it("contains an I element with class gicon-submenu-close-s", function () {
                    expect(getMetaActionListItemWithDropdown().find("i.gicon-submenu-close-s")).toHaveLength(1);
                });
            });
            describe("and I click it once more", function () {
                beforeEach(function () {
                    clickMetaActionWithDropdown();
                });
                describe("the meta action's list element", function () {
                    it("does not have class dropdown-is-open", function () {
                        expect(getMetaActionListItemWithDropdown()).not.toHaveClass("dropdown-is-open");
                    });
                    it("contains an I element with class gicon-submenu-open-s", function () {
                        expect(getMetaActionListItemWithDropdown().find("i.gicon-submenu-open-s")).toHaveLength(1);
                    });
                    it("does not contain an I element with class gicon-submenu-close-s", function () {
                        expect(getMetaActionListItemWithDropdown().find("i.gicon-submenu-close-s")).toHaveLength(0);
                    });
                });
            });
            describe("and I click outside the dropdown menu", function () {
                beforeEach(function () {
                    clickOutsideDropdownMenu();
                });
                describe("the meta action's list element", function () {
                    it("does not have class dropdown-is-open", function () {
                        expect(getMetaActionListItemWithDropdown()).not.toHaveClass("dropdown-is-open");
                    });
                    it("contains an I element with class gicon-submenu-open-s", function () {
                        expect(getMetaActionListItemWithDropdown().find("i.gicon-submenu-open-s")).toHaveLength(1);
                    });
                    it("does not contain an I element with class gicon-submenu-close-s", function () {
                        expect(getMetaActionListItemWithDropdown().find("i.gicon-submenu-close-s")).toHaveLength(0);
                    });
                });
            });
            describe("and I click one of the dropdown menu items", function () {
                beforeEach(function () {
                    clickMetaActionDropdownMenuItem();
                });
                describe("the meta action's list element", function () {
                    it("still has class dropdown-is-open", function () {
                        expect(getMetaActionListItemWithDropdown()).toHaveClass("dropdown-is-open");
                    });
                    it("does not contain an I element with class gicon-submenu-open-s", function () {
                        expect(getMetaActionListItemWithDropdown().find("i.gicon-submenu-open-s")).toHaveLength(0);
                    });
                    it("contains an I element with class gicon-submenu-close-s", function () {
                        expect(getMetaActionListItemWithDropdown().find("i.gicon-submenu-close-s")).toHaveLength(1);
                    });
                });
            });
        });

        describe("and I click on a main menu item that has a dropdown", function () {
            beforeEach(function () {
                clickMainMenuItemWithDropdown();
            });

            describe("the menu item's list element", function () {
                it("has class dropdown-is-open", function () {
                    expect(getMainMenuListItemWithDropdown()).toHaveClass("dropdown-is-open");
                });

                it("does not contain an I element with class gicon-submenu-open-s", function () {
                    expect(getMainMenuListItemWithDropdown().find("i.gicon-submenu-open-s")).toHaveLength(0);
                });

                it("contains an I element with class gicon-submenu-close-s", function () {
                    expect(getMainMenuListItemWithDropdown().find("i.gicon-submenu-close-s")).toHaveLength(1);
                });
            });

            describe("the gap element", function () {
                it("has the same width as the main menu item that opened the dropdown", function () {
                    expect(getGapElement().outerWidth()).toBe(getMainMenuItemWithDropdown().outerWidth());
                });
            });

            describe("and I click it once more", function () {
                beforeEach(function () {
                    clickMainMenuItemWithDropdown();
                });

                describe("the menu item's list element", function () {
                    it("does not have class dropdown-is-open", function () {
                        expect(getMainMenuListItemWithDropdown()).not.toHaveClass("dropdown-is-open");
                    });
                    it("contains an I element with class gicon-submenu-open-s", function () {
                        expect(getMainMenuListItemWithDropdown().find("i.gicon-submenu-open-s")).toHaveLength(1);
                    });

                    it("does not contain an I element with class gicon-submenu-close-s", function () {
                        expect(getMainMenuListItemWithDropdown().find("i.gicon-submenu-close-s")).toHaveLength(0);
                    });
                });

                describe("the icon in the meta menu item for selecting the language", function () {
                    it("does not have the class gicon-submenu-open-s", function () {
                        expect($(".gicon-flag-ger-s").hasClass("gicon-submenu-open-s")).not.toBeTruthy();
                    });
                });
            });

            describe("and I click outside the dropdown menu", function () {
                beforeEach(function () {
                    clickOutsideDropdownMenu();
                });

                describe("the menu item's list element", function () {
                    it("does not have class header-main-nav-item-open", function () {
                        expect(getMainMenuListItemWithDropdown()).not.toHaveClass("header-main-nav-item-open");
                    });

                    it("contains an I element with class gicon-submenu-open-s", function () {
                        expect(getMainMenuListItemWithDropdown().find("i.gicon-submenu-open-s")).toHaveLength(1);
                    });

                    it("does not contain an I element with class gicon-submenu-close-s", function () {
                        expect(getMainMenuListItemWithDropdown().find("i.gicon-submenu-close-s")).toHaveLength(0);
                    });

                });

                describe("the icon in the meta menu item for selecting the language", function () {
                    it("does not have the class gicon-submenu-open-s", function () {
                        expect($(".gicon-flag-ger-s").hasClass("gicon-submenu-open-s")).not.toBeTruthy();
                    });
                });
            });

            describe("and I click one of the dropdown menu items", function () {
                beforeEach(function () {
                    clickDropdownMenuItem();
                });

                describe("the menu item's list element", function () {
                    it("still has class header-main-nav-item-open", function () {
                        expect(getMainMenuListItemWithDropdown()).toHaveClass("dropdown-is-open");
                    });
                    it("does not contain an I element with class gicon-submenu-open-s", function () {
                        expect(getMainMenuListItemWithDropdown().find("i.gicon-submenu-open-s")).toHaveLength(0);
                    });
                    it("contains an I element with class gicon-submenu-close-s", function () {
                        expect(getMainMenuListItemWithDropdown().find("i.gicon-submenu-close-s")).toHaveLength(1);
                    });
                });
            });

            describe("and I click on another main menu item that has a dropdown", function () {
                beforeEach(function () {
                    clickMainMenuItemWithDropdown(1);
                });

                describe("the list element of the menu item I clicked first", function () {
                    it("does not have class header-main-nav-item-open", function () {
                        expect(getMainMenuListItemWithDropdown()).not.toHaveClass("header-main-nav-item-open");
                    });

                    it("contains an I element with class gicon-submenu-open-s", function () {
                        expect(getMainMenuListItemWithDropdown().find("i.gicon-submenu-open-s")).toHaveLength(1);
                    });

                    it("does not contain an I element with class gicon-submenu-close-s", function () {
                        expect(getMainMenuListItemWithDropdown().find("i.gicon-submenu-close-s")).toHaveLength(0);
                    });
                });

                describe("the list element of the menu item I clicked last", function () {
                    it("has class header-main-nav-item-open", function () {
                        expect(getMainMenuListItemWithDropdown(1)).toHaveClass("dropdown-is-open");
                    });

                    it("does not contain an I element with class gicon-submenu-open-s", function () {
                        expect(getMainMenuListItemWithDropdown(1).find("i.gicon-submenu-open-s")).toHaveLength(0);
                    });

                    it("contains an I element with class gicon-submenu-close-s", function () {
                        expect(getMainMenuListItemWithDropdown(1).find("i.gicon-submenu-close-s")).toHaveLength(1);
                    });
                });
            });
        });
    });

    function clickHamburgerMenuToggle() {
        $(".js-header-menu-toggle").click();
    }

    function touchHamburgerMenuToggle() {
        $(".js-header-menu-toggle").trigger("touchstart");
    }

    function clickMainMenuItemWithDropdown(index) {
        getMainMenuItemWithDropdown(index).click();
    }

    function clickMetaActionWithDropdown(index) {
        getMetaActionWithDropdown(index).click();
    }

    function getMainMenuItemWithDropdown(index) {
        if (typeof index === "undefined") {
            return $(".header-nav-link-toggle").first();
        }
        return $(".header-nav-link-toggle").eq(index);
    }

    function getMetaActionWithDropdown(index) {
        if (typeof index === "undefined") {
            return $(".header-meta-action-toggle").first();
        }
        return $(".header-meta-action-toggle").eq(index);
    }

    function getMainMenuListItemWithDropdown(index) {
        return getMainMenuItemWithDropdown(index).closest("li");
    }

    function getMetaActionListItemWithDropdown(index) {
        return getMetaActionWithDropdown(index).closest("li");
    }

    function getGapElement(parent) {
        var $parent = parent ? $(parent) : getMainMenuListItemWithDropdown();
        return $parent.find("li").first().find(".header-nav-dropdown-gap");
    }

    function clickOutsideDropdownMenu() {
        $("header").click();
    }

    function clickMetaActionDropdownMenuItem() {
        dispatchClick($(".header-meta-action-dropdown-item").first().find("a"));
    }

    function clickDropdownMenuItem() {
        dispatchClick($(".header-main-nav-dropdown-item").first().find("a"));
    }

    function dispatchClick($element) {
        // we can't simply use $.click() here - that will create a jQuery event without "originalEvent" property;
        // we need originalEvent because $.navigation() is adding a custom flag to it
        var event = document.createEvent("MouseEvent");
        event.initMouseEvent("click", true, true);
        $element[0].dispatchEvent(event);
    }

    function init() {
        loadFixture();
        initPlugin();
    }

    function loadFixture() {
        var html = jasmine.getFixtures().read("navigation.html");
        jasmine.getFixtures().set(html);
    }

    function initPlugin() {
        $("header").navigation();
    }
});
