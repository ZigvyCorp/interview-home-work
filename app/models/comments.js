const MainModel 	= require(__path_schemas + 'comments');


module.exports = {
    listItems: (params, options = null) => {
        // coppy params
        const queryFind =   { ...params };
        let find,select,sort 
        // Create fields remove
        let removeFields = ['select','sort','page','limit'];
        // Remove fields 
        removeFields.forEach(param => delete queryFind[param]); // param[select] 
        // Create query string
        let queryStr = JSON.stringify(queryFind);
        
        // replace 
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, find => `$${find}`); 
        //parse
        find = JSON.parse(queryStr);
        // select fields
        if(params.select){
            select = params.select.split(',').join(' ')
        }
        // sort fields
        if(params.sort){
            sort = params.sort.split(',').join(' ');
        }
        //pagination
        const page  = parseInt(params.page) || 1;
        const limit = parseInt(params.limit) || 6;
        const skip  = ( page-1 )*limit;

        if(options.task == 'all'){
            return MainModel
                .find(find)
                .select(select)
                .sort(sort)
                .skip(skip).limit(limit)
        }
        if(options.task == 'one'){
            return MainModel
                .find({id: params.id})
                .select({})
        }
    },
    create: (item) => {
        return new MainModel(item).save()
    },
    deleteItem: (params, options = null) => {
        if (options.task == 'one') {
            return MainModel.deleteOne({id: params.id})
        }
    },
    editItem: (params, options = null) => {
        if (options.task == 'edit') {
            return MainModel.updateOne({id: params.id}, params.body)
        }
    },
}