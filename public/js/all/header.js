(function(){
    var st = {
        parent          : '.header',
        iconMenu        : 'nav .icon_menu',
        menu            : 'nav .menu',
        allSubmenu      : '.submenu',
        elToggleSubmenu : '.submenu + a',
        classOpen       : 'open',
    };

    var dom = {};

    var catchDom = function() {
        dom.parent   = $(st.parent);
        dom.iconMenu = $(st.iconMenu, dom.parent);
        dom.menu     = $(st.menu, dom.parent);

        dom.allSubmenu      = $(st.allSubmenu, dom.menu);
        dom.elToggleSubmenu = $(st.elToggleSubmenu, dom.menu);
    }

    var suscribeEvents = function() {
        dom.iconMenu.on('click',events.toggleMenu);
        dom.elToggleSubmenu.on({
            click   : events.toggleSubmenu,
            focusout: events.closeSubmenu,
            focusin : events.clearTimeoutSubmenu,
            keydown : events.closeSubmenuEsc
        });
        dom.allSubmenu.on({
            focusout: events.closeSubmenu,
            focusin : events.clearTimeoutSubmenu,
            keydown : events.closeSubmenuEsc
        });

    }

    var events = {
        toggleMenu : function(e) {
            $(this).toggleClass(st.classOpen);
            e.preventDefault();
        },
        toggleSubmenu : function(e) {
            let submenu = $(this).parent().find(st.allSubmenu);

            submenu.toggleClass(st.classOpen);
            e.preventDefault();
        },
        closeSubmenu : function() {
            let $this   = $(this),
                submenu = fn.getSubmenu($this);

            submenu.data('timer', setTimeout(function () {
                submenu.removeClass(st.classOpen);
            }.bind(this), 0));
        },
        clearTimeoutSubmenu : function() {
            let $this   = $(this),
                submenu = fn.getSubmenu($this);

            clearTimeout(submenu.data('timer'));
        },
        closeSubmenuEsc : function(e) {
            let $this   = $(this),
                submenu = fn.getSubmenu($this);

            if (e.which === 27) {
                submenu.removeClass(st.classOpen);
                e.preventDefault();
            }
        }
    }

    var fn = {
        getSubmenu : function($this) {
            if (!$this.hasClass(st.allSubmenu)) {
                return $this.parent().find(st.allSubmenu);
            }
            else {
                return $this;
            }
        }

    }

    function initialize() {
        catchDom();
        suscribeEvents();
    }

    initialize();
})();
