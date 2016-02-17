import React from 'react';

let examples = {
  element: 'bulbs-poll',
  examples: {
    'Standard Example': {
      render: function () {
        return `
          <bulbs-poll
            src="http://localhost:8080/fixtures/bulbs-poll/poll-data.json"
          >
          </bulbs-poll>
        `;
      },
    },
    'Cover Image': {
      render: function () {
        return `
          <bulbs-poll
            src="http://localhost:8080/fixtures/bulbs-poll/poll-data-cover-image.json"
          >
          </bulbs-poll>
        `;
      },
    },
    'Request Error': {
      render: function () {
        return `
          <bulbs-poll src="httx://not-a-valid-url:oldsport/">
          </bulbs-poll>
        `;
      },
    },
    'Results': {
      render: function () {
        let src = 'http://localhost:8080/fixtures/bulbs-poll/poll-data.json';
        localStorage.setItem(`bulbs-poll:${src}:vote`, JSON.stringify({
          id: 293849,
          total_votes: 23,
        }));
        return `
          <bulbs-poll
            src="${src}"
          >
          </bulbs-poll>
        `;
      },
    },
    'avclub local': {
      render: function () {
        let pollId = '230936';
        let src = `http://avclub.local/poll/${pollId}.json`;
        //localStorage.removeItem(`bulbs-poll:${src}:vote`);
        return `
          <bulbs-poll
            src="${src}"
          >
          </bulbs-poll>
        `;
      },
    }
  },
};
export default examples;
