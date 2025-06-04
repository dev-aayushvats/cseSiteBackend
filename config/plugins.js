module.exports = () => ({
	"fuzzy-search": {
    	enabled: true,
    	config: {
      	contentTypes: [
		{
          uid: 'api::people.people',
          modelName: 'people',
          fuzzysortOptions: {
            characterLimit: 300,
            threshold: 0.6,
            limit: 10,
            keys: [
              { name: 'Name', weight: 0.2 },
              { name: 'Designation', weight: 0.1 },
            ],
          },
        },
	{
          uid: 'api::about-page.about-page',
          modelName: 'about-page',
          fuzzysortOptions: {
            characterLimit: 300,
            threshold: 0.6,
            limit: 10,
            keys: [
              { name: 'Title', weight: 0.2 },
              { name: 'Description', weight: 0.1 },
            ],
          },
        }
	],
    },
  },
});
