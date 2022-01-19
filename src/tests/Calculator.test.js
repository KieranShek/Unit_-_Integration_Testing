import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import cypress from 'cypress';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })
  it('should be able to add', ()=>{
    container.find('#number1').simulate('click');
    container.find('#operator_add').simulate('click');
    container.find('#number4').simulate('click')
    container.find('#operator-equals').simulate('click')
    const runningTotal = container.find('#running-total')
    expect(runningTotal.text()).toEqual('5');
  })
  it('should be able to minus', ()=>{
    container.find('#number7').simulate('click');
    container.find('#operator-subtract').simulate('click');
    container.find('#number4').simulate('click')
    container.find('#operator-equals').simulate('click')
    const runningTotal = container.find('#running-total')
    expect(runningTotal.text()).toEqual('3');
  })
  it('should be able to multiply', ()=>{
    container.find('#number3').simulate('click');
    container.find('#operator-multiply').simulate('click');
    container.find('#number5').simulate('click')
    container.find('#operator-equals').simulate('click')
    const runningTotal = container.find('#running-total')
    expect(runningTotal.text()).toEqual('15');
  })
  it('should be able to divide', ()=>{
    container.find('#number2').simulate('click');
    container.find('#number1').simulate('click');
    container.find('#operator-divide').simulate('click');
    container.find('#number7').simulate('click')
    container.find('#operator-equals').simulate('click')
    const runningTotal = container.find('#running-total')
    expect(runningTotal.text()).toEqual('3');
  })
  it('should be able to concatenate', ()=>{
    container.find('#number3').simulate('click');
    container.find('#number3').simulate('click');
    const runningTotal = container.find('#running-total')
    expect(runningTotal.text()).toEqual('33')
  })
  it('should be able to carry out multiple operations', ()=>{
    container.find('#number3').simulate('click');
    container.find('#operator-multiply').simulate('click');
    container.find('#number7').simulate('click');
    container.find('#operator-divide').simulate('click');
    container.find('#number7').simulate('click')
    container.find('#operator-equals').simulate('click')
    const runningTotal = container.find('#running-total')
    expect(runningTotal.text()).toEqual('3');
  })

  it('should be able to clear the current total without affecting the calculation', ()=>{
    container.find('#number1').simulate('click');
    container.find('#operator_add').simulate('click');
    container.find('#number1').simulate('click');
    container.find('#clear').simulate('click');
    container.find('#operator_add').simulate('click');
    container.find('#number2').simulate('click');
    container.find('#operator-equals').simulate('click')
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should not be able to divide by zero and display an error', ()=>{
    container.find('#number1').simulate('click');
    container.find('#operator-divide').simulate('click');
    container.find('#number0').simulate('click');
    container.find('#operator-equals').simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('ERROR');
  })
})

