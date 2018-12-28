const getters = {
    sidebar: state => state.layoutt.sidebar,
    visitedViews: state => state.tags.visitedViews,
    cachedViews: state => state.tags.cachedViews,
}

export default getters