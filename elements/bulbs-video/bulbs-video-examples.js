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
    'Special Coverage Main': {
      render () {
        return `
          <bulbs-video
            twitter-handle="avclub"
            src="http://localhost:8080/fixtures/bulbs-video/special-coverage.json"
            target-host-channel="specialcoverage_main"
            target-special-coverage="food"
            target-campaign-id="12345"
          >
          </bulbs-video>
        `;
      },
    },
    'Muted, autoplay player': {
      render () {
        return `
          <bulbs-video
            twitter-handle="avclub"
            src="http://localhost:8080/fixtures/bulbs-video/special-coverage.json"
            autoplay muted
          >
          </bulbs-video>
        `;
      },
    },
    'Rail player with channel logo': {
      render () {
        return `
          <rail-player
						style="width: 300px; margin: 0 auto;"
						recirc-url="http://www.onionstudios.com"
            channel='clickhole'
            src="http://localhost:8080/fixtures/rail-player/clickhole-channel.json"
          >
          </rail-player>
        `;
      },
    },
    'Rail player without channel logo': {
      render () {
        return `
          <rail-player
						style="width: 300px; margin: 0 auto;"
						recirc-url="http://www.onionstudios.com"
            channel='theonion'
            src="http://localhost:8080/fixtures/rail-player/clickhole-channel.json"
          >
          </rail-player>
        `;
      },
    },
    'Rail player with campaign': {
      render () {
        return `
          <rail-player
						style="width: 300px; margin: 0 auto;"
						recirc-url="http://www.onionstudios.com"
            channel='avclub'
            src="http://localhost:8080/fixtures/rail-player/with-campaign.json"
          >
          </rail-player>
        `;
      },
    },
  },
};

export default examples;
