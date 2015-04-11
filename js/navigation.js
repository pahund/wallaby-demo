define([
    "jquery"
], function ($) {
    "use strict";

    function navigation(wrapper) {

        var $wrapper = $(wrapper),
            $document = $(document),
            $window = $(window),
            init,
			handle,
            get,
            is;

        $.event.props.push("mdeHeaderInsideDropdown");

        init = {
            /**
             * Initializes the main menu dropdowns by adding a div for nice layout.
             * @returns {init} The init variable (for chaining)
             */
            dropdown: function () {
                $wrapper.find(".header-main-nav-dropdown").each(function () {
                    var $dropdown = $(this),
                        $gap = $("<div class=\"header-nav-dropdown-gap\"></div>");
                    $dropdown.find("li").first().prepend($gap);
                });
                return this;
            },
            /**
             * Initializes event handlers.
             * @returns {init} The init variable (for chaining)
             */
            handlers: function () {
                $wrapper.find(".js-header-menu-toggle").on("touchstart click", handle.hamburgerToggle);
                $wrapper.find(".header-nav-link-toggle").one("touchstart click", handle.dropdownOpen);
                $wrapper.find(".header-main-nav-dropdown").on("touchstart click", handle.dropdownClick);
                $wrapper.find(".header-meta-action-toggle").one("touchstart click", handle.dropdownOpen);
                $wrapper.find(".header-meta-action-dropdown").on("touchstart click", handle.dropdownClick);
                return this;
            }
        };

        get = {
            /**
             * Gets the gap layer of that belongs to a header nav link toggle element (i.e. the menu item that
             * was clicked to open a dropdown menu).
             * @param $headerNavLinkToggle The menu item (jQuery element)
             * @returns The gap layer (jQuery element)
             */
            gap: function ($headerNavLinkToggle) {
                return $headerNavLinkToggle.siblings(".header-main-nav-dropdown").find(".header-nav-dropdown-gap");
            },

            /**
             * Gets the list item that an element is contained in.
             * @param $element The jQuery element
             * @returns The jQuery element of the wrapping list item
             */
            wrappingListItem: function ($element) {
                return $element.closest("li").addClass("dropdown-is-open");
            },

            /**
             * Gets the li element of the main menu item that is currently open.
             * @returns {*|jQuery|HTMLElement}
             */
            openMenuListItem: function () {
                return $(".dropdown-is-open");
            },

            /**
             * Gets the icon inside the specified element.
             * @returns {*|jQuery|HTMLElement}
             */
            icon: function ($element) {
                if (typeof $element === "undefined") {
                    $element = get.openMenuListItem();
                }
                return $element.find(".icon--s");
            }
        };

        is = {
            /**
             * Returns true if an event was triggered through an element outside a dropdown
             * @returns {boolean}
             */
            outsideDropdown: function (event) {
                return !event.mdeHeaderInsideDropdown;
            }
        };

        handle = {
            /**
             * Opens and closes the menu for phones (a.k.a. "hamburger menu").
             * @param ev The event that triggered the toggle
             */
            hamburgerToggle: function (ev) {
                ev.preventDefault();
                $wrapper.find(".js-header-nav").toggleClass("is-open");
            },

            /**
             * Opens a dropdown menu as a submenu of a main menu item.
             * @param ev The event that triggered the opening
             */
            dropdownOpen: function (event) {
				var $target = $(event.target);

                event.preventDefault();
                event.stopPropagation();

                $document.click();
                get.icon($target).removeClass("gicon-submenu-open-s").addClass("gicon-submenu-close-s");
                get.gap($target).css("width", $target.outerWidth() + "px");
                get.wrappingListItem($target).addClass("dropdown-is-open");
                $document.one("click", handle.dropdownClose);
                $window.one("resize", function () {
                    $document.click();
                });
            },

            /**
             * Closes the main menu dropdown that is currently open.
             * @param ev The event that triggered the closing
             */
            dropdownClose: function (ev) {
                if (is.outsideDropdown(ev)) {
                    get.icon().removeClass("gicon-submenu-close-s").addClass("gicon-submenu-open-s");
                    get.openMenuListItem()
                            .removeClass("dropdown-is-open")
                            .find(".header-nav-link-toggle, .header-meta-action-toggle")
                            .one("touchstart click", handle.dropdownOpen);
                    return;
                }
                $document.one("touchstart click", handle.dropdownClose);
            },

            dropdownClick: function (ev) {
                ev.originalEvent.mdeHeaderInsideDropdown = true;
            }
        };

        init.dropdown().handlers();
    }

    $.fn.navigation = function () {
        return this.each(function () {
            navigation(this);
        });
    };
});
