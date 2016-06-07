let examples = {
  element: 'bulbs-video',
  examples: {
    'Clickhole Example': {
      render: () => {
        return `
          <bulbs-video
            src="http://localhost:8080/fixtures/bulbs-video/clickhole.json"
          >
          </bulbs-video>
        `;
      },
    },
    'VAST HTML5 Example': {
      render: () => {
        return `
          <bulbs-video
            src="http://localhost:8080/fixtures/bulbs-video/vast-html5.json"
          >
          </bulbs-video>
        `;
      },
    },
    'videohub.local example': {
      render () {
        return `
          <bulbs-video
            twitter-handle="avclub"
            src="//videohub.local/video/3916.json"
          >
          </bulbs-video>
        `;
      },
    },
  },
};

export default examples;
