export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e35bb2bcf4258f573de001e',
                  title: 'Sanity Studio',
                  name: 'headforcode-next-js-studio',
                  apiId: 'd76687e4-b0a0-4d11-9b71-c4e29115cf12'
                },
                {
                  buildHookId: '5e35bb2be9be20547d74686c',
                  title: 'Landing pages Website',
                  name: 'headforcode-next-js',
                  apiId: '2a0c50d7-5a32-4a8b-be8e-900c14004c4f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickeblewis/headforcode-next-js',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://headforcode-next-js.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
