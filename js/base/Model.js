window.Model = function (options) {
    let resourceName = options.resourceName;
    return {
        init:function () {
            var APP_ID = 'gqlmsYEe0uGOFjOWjYRi2WBM-gzGzoHsz';
            var APP_KEY = 'UyaKPM6dI0nX43h4h7F9hARa';
            AV.init({appId: APP_ID, appKey: APP_KEY});
        },
        // 获取数据
        fetch: function () {
            // 将数据库里的数据显示在页面上
            var query = new AV.Query(resourceName);
            return query.find(); // 返回一个Promise对象
        },
        // 创建数据
        save: function (object) {
            var Message = AV.Object.extend(resourceName);
            var message = new Message();
            return message.save(object) // 返回一个Promise对象
        }
    }
}
