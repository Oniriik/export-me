import { Meteor } from 'meteor/meteor';
import { ProjectsCollection } from '../api/collections/projectsCollection';

Meteor.startup(() => {
    if (ProjectsCollection.find().count() === 0) {
        ProjectsCollection.insert({
            title: 'Export me',
            URI: 'https://www.timothelim.me',
            rendered: true
        });
    }
});
