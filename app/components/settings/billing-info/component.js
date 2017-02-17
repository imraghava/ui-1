import Ember from 'ember';

export default Ember.Component.extend({
  modalService: Ember.inject.service('modal'),
  classNames: ['billing-info', 'p-20'],
  cards: null,
  actions: {
    addNew() {
      this.get('modalService').toggleModal('modal-add-payment', {
      });
    }
  }
});
