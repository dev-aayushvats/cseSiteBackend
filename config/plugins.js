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
        }
	],
    },
  },
});
