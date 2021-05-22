/**
 * @jest-environment jsdom
 */
 import { pushToHistory } from "../scripts/router";

 describe('testing pushToHistory method', () => {

    // CASE 1
    test('case: settings ', () => {
        //current state obj
        let test = pushToHistory('settings', -1);
        //checks length
        expect(test.length).toBe(history.length);
        //checks state
        expect(test.state.page).toBe('settings');
        //console.log(history.length);
    });
    // CASE 2
    test('case: entry',() => {
        //current state obj
        let test = pushToHistory('entry', 100);
        //checks length
        expect(test.length).toBe(history.length);
        //checks state
        expect(test.state.page).toBe('entry100');
    });

    // CASE 3
    test('case: default',() => {
        //current state obj
        let test = pushToHistory('sajdklhfal', -511);
        //checks length
        expect(test.length).toBe(history.length);
        //checks state
        expect(test.state.page).toBe(undefined);
    });



 });