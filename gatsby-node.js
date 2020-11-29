const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`{
        allMicrocmsArticles {
            edges {
                node {
                    id
                    title
                    date(formatString: "YYYY年MM月D日")
                    title_origin
                    category {
                        id
                        name
                    }
                    pict {
                        url
                    }
                    body
                    feature
                }
            }
        }
    }`)

    if (result.errors) {
        throw result.errors
    }

    result.data.allMicrocmsArticles.edges.forEach(edge => {
        createPage({
            path: `/articles/${edge.node.id}`,
            component: path.resolve(
                "./src/templates/article.js"
            ),
            context: {
                id: edge.node.id,
            }
        })

    })
}
