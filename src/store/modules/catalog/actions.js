export default {
    async loadCatalog(context, payload) {
        // test getting context and payload
        // console.log(context);
        // console.log(payload);

        const dataList = [];

        // set test mocks > test with delay in mocky io!
        // const urlData = 'https://run.mocky.io/v3/2727989e-3d31-4d3f-8bc1-9a42a8679957?mocky-delay=1500ms';
        const urlData = '/static/mock/catalog-data.json';

        // -------------------------------------------
        // get sample data with simple fetch api
        const response = await fetch(urlData);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        // get each item and format / extract desired data
        for (const key in responseData.results) {
            // manipulate things, date, etc > build clean item
            const item = {
                id: responseData.results[key].id,
                name: responseData.results[key].name,
                tags: responseData.results[key].tags,
                image: responseData.results[key].image,
                imageURL: '/static/catalog/' + responseData.results[key].image,
                address: responseData.results[key].address,
                stars: Number(responseData.results[key].stars),
                priceRegularWeekday: Number(responseData.results[key].priceRegularWeekday),
                priceRewardWeekday: Number(responseData.results[key].priceRewardWeekday),
                priceRegularWeekend: Number(responseData.results[key].priceRegularWeekend),
                priceRewardWeekend: Number(responseData.results[key].priceRewardWeekend)
            };

            dataList.push(item);
        }

        // commit mutation and update list state THERE > OJO
        context.commit('setCatalog', dataList);
    }
};
