Meteor.startup(function() {
    if (Items.find().count() === 0) {
        for (var i = 0; i < 1000; i++) {
            Items.insert({
                i: i,
                title: "Item " + i,
                someRandom: Math.round(1000 * Math.random())
            });
        }
    }
});
