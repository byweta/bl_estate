/**
 * 打开一级选项弹框Demo
 * @param {Object} oneOptionId 选中选项一的Id
 */
function fnCheckOptionDemo(oneOptionId){
	getOptionId(oneOptionId, function(checkOption){
		firstOptionId = checkOption.firstOptionId;
		var firstOptionName= checkOption.firstOptionName;
	});
}

// 选项一的Id值
var firstOptionId = '';

// 选项一数据源
var firstOptions = [];

// 选择
function getOptionId(firstOptionId, callback){
    oneLevelId = firstOptionId;
    var iosSelect = new IosSelect(1,
        [firstOptions],
        {
            title: '选择',
            itemHeight: 35,
            relation: [1],
            oneLevelId: oneLevelId,
            callback: function (selectOneObj) {
                var checkOption = {
                    firstOptionId: selectOneObj.id,
                    firstOptionName: selectOneObj.value
                };
                firstOptionId = checkOption.firstOptionId;
                callback(checkOption);
            }
    });
}