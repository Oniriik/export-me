import { Template } from 'meteor/templating';

import './projectsTable.html';

import { ProjectsCollection } from '../../../api/collections/projectsCollection';
import '../projectsRow/projectRow';


Template.projectsTable.helpers({
    projects() {
        return ProjectsCollection.find({});
    }
});


