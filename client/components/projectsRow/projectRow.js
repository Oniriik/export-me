import { Template } from 'meteor/templating';

import './projectRow.html'
import { ProjectsCollection } from '../../../api/collections/projectsCollection';

Template.projectRow.events({
    'click .render-btn'(e) {
        let progress = 0
        e.target.disabled = true;
        const interval = setInterval(() => {
            if (progress == 100) {
                ProjectsCollection.update(this._id, {
                    $set: { rendered: true }
                });
                clearInterval(interval);
            }

            e.target.parentNode.parentNode.childNodes[4].childNodes[1].style.width = `${progress}%`;

            progress += 5;
        }, 1000)
    },

    'click .open-btn'() {
        window.open(this.URI);

    },
    'click .delete-icon'() {
        ProjectsCollection.remove(this._id)
    }
});