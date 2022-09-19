import './addProjectForm.html';

import { Template } from 'meteor/templating';

import { ProjectsCollection } from '../../../api/collections/projectsCollection';
import { GetRandomURI } from '../../helpers';

Template.addProjectForm.events({
    "submit .add-form"(event) {

        event.preventDefault();

        const target = event.target;
        const title = target.text.value;

        ProjectsCollection.insert({
            title,
            rendered: false,
            URI: GetRandomURI(),
        })

        target.text.value = '';
    }
})