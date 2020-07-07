import chai from 'chai';

import { expect } from 'chai';
import App from '../../src/App.vue'
import { createLocalVue,shallowMount } from "@vue/test-utils";
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import spies from 'chai-spies';
chai.use(spies);
chai.use(sinonChai);
describe('Basic component', () => {

  describe('Lifecycle', () => {
    it('Mounted', () => {
      const mountedFin=sinon.stub(App.methods,'mountedFin') //Wrapper After The Stub!!!!
      const wrapper = shallowMount(App);
      expect(mountedFin).to.be.calledWith('Mounted')
      
    })

    it('Destroyed',() => {
     const destroyedFin=sinon.stub(App.methods,'destroyedFin') //Wrapper After The Stub!!!!
     const wrapper = shallowMount(App);
     wrapper.destroy()
     expect(destroyedFin).to.be.calledWith() //We expect that the function will be called after wrapper destroy 
    })
    
  })
})

// const localVue = createLocalVue();
var component = shallowMount(App);
