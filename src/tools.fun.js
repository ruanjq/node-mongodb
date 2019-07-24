/**
 * 通用函数工具
 */

const toolsFun = {
    dataFormat(value,format) {
        if (value == undefined || value == "") return "";
        let result = '';
        let date;

        // 时间戳数字，长度10位 
        if (isNaN(value) == false && value.toString().length == 10) {
            date = new Date((value) * 1000);
        }
        // 时间戳数字，长度12位
        else if (isNaN(value) == false && value.toString().length == 13) {
            date = new Date(value);
        }

        // 字符串，且为时间戳长度10位 
        else if (isNaN(value) == true && parseInt(value) > 0 && value.leng == 10) {
            date = new Date((parseInt(value)) * 1000);
        }

        // 字符串，且为时间戳长度13位 
        else if (isNaN(value) == true && parseInt(value) > 0 && value.leng == 13) {
            date = new Date((parseInt(value)))
        } else {
            date = new Date(value);
        }

        let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        let monthIndex = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
        let year = date.getFullYear();
        let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        let sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        // 匹配格式
        switch (format) {
            case 'YYYY/MM/dd HH:mm:ss':
                result = `${year}/${monthIndex}/${day} ${hours}:${minutes}:${sec}`;
                break;
            case 'YYYY/MM/dd':
                result = `${year}/${monthIndex}/${day}`;
                break;
        }
        return result;
    }
}

export default toolsFun;