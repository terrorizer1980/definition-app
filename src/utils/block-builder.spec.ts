import 'mocha'
import { expect } from 'chai'
import { context, section } from './block-builder'

describe('Block builder', () => {
    describe('context', () => {
        it('returns a formatted context block containing the provided text', () => {
            const test_text = 'test';
            const actual_value = context(test_text);
            const expected_value = {
                type: "context",
                elements: [
                    {
                        type: "mrkdwn",
                        text: test_text
                    }
                ]
            };
            expect(actual_value).to.eql(expected_value);
        })
    })
    describe('section', () => {
        it('returns a formatted section block containing the provided text', () => {
            const test_text = 'test';
            const actual_value = section(test_text);
            const expected_value = {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: test_text
                }
            };
            expect(actual_value).to.eql(expected_value);
        })
    })
});