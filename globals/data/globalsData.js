const Global_data = {
    login: true,
    rootNav: null,
    bottomNav: null,

    user_logged_in: function (x) {
        if (x != null) {
            this.login = x;
        }
        return this.login
    },
    root_navigation: function (x) {
        if (x != null) {
            this.rootNav = x;
        }
        return this.rootNav
    },
    bottom_navigation: function (x) {
        if (x != null) {
            this.bottomNav = x;
        }
        return this.bottomNav
    }
}

export default Global_data;