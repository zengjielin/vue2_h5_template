/*
 *上传文件到阿里云oss
 *@param - uploadParams 上传阿里云form必传参数
 *@param - file :图片的本地资源
 *@param - successc:成功回调
 *@param - failc:失败回调
 */
import {
    Toast
} from 'vant';
import axios from 'axios'
import lrz from "lrz";

/**
 * lrz(file, [options]); //压缩文件后在上传
 * file 通过 input:file 得到的文件，或者直接传入图片路径
 * [options] 这个参数允许忽略
 * width {Number} 图片最大不超过的宽度，默认为原图宽度，高度不设时会适应宽度。
 * height {Number} 同上
 * quality {Number} 图片压缩质量，取值 0 - 1，默认为0.7
 * fieldName {String} 后端接收的字段名，默认：file
 */

export const uploadFile = async (uploadParams, file, successc, failc) => {
    if (!file) {
        Toast.fail('图片错误');
        return;
    }
    //图片名字 可以自行定义，这里是采用当前的时间戳 + 150内的随机数来给图片命名的
    const aliyunFileKey = uploadParams.prefix + new Date().getTime() + Math.floor(Math.random() * 150) + '.png';
    let compressFile = await lrz(file, { quality: 0.7 });
    axios.post(uploadParams.host, {
        'key': aliyunFileKey,
        'policy': uploadParams.policy,
        'OSSAccessKeyId': uploadParams.OSSAccessKeyId,
        'signature': uploadParams.signature,
        'callback': uploadParams.callback,
        'success_action_status': '200',
        'file': compressFile.file
    })
        .then(res => {
            if (res.code != 0) {
                failc(new Error('上传错误:' + JSON.stringify(res)))
                return;
            }
            successc(`${uploadParams.host}/${aliyunFileKey}`);
        })
        .catch(err => {
            failc(err);
        });
}
