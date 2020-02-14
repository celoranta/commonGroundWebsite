const B2 = require('backblaze-b2');
const dateformat = require('dateformat');
const fs = require('fs')

const cGAudioBucketId = process.env.B2_CG_AUDIO_BUCKET_ID;
const cGImagesBucketId = process.env.B2_CG_IMAGES_BUCKET_ID;
const sqlDateFormat = "yyyy-mm-dd HH:MM:ss";
const b2 = new B2({
    accountId: process.env.B2_ACCOUNT_ID,
    applicationKey: process.env.B2_APPLICATION_KEY
});

async function getBuckets() {
    try {
        await b2.authorize();
        var response = await b2.listBuckets();
        const buckets = response.data.buckets;
        var bucketNames = "";
        for (i = 0; i < buckets.length; i++) {
            const bucket = buckets[i];
            const bucketName = bucket.bucketName;
            console.log(bucketName);
        }
    } catch (e) {
        console.log('Error getting buckets:', e)
    }
};

async function getFiles(bucketName) {
    try {
        await b2.authorize();
        var response = await b2.listFileNames({
            bucketId: bucketName,
            startFileName: '',
            maxFileCount: 100,
            delimiter: '',
            prefix: ''
        })
        .then(function (response) {
            var data = response.data
            credentials = {
                accountId: accountId,
                applicationKey: applicationKey,
                apiUrl: data.apiUrl,
                authorizationToken: data.authorizationToken,
                downloadUrl: data.downloadUrl,
                recommendedPartSize: data.recommendedPartSize
            }
            window.alert(credentials);
        });
        const fileObjects = response.data.files;
        console.log("File Count: " + fileObjects.length);
        var returnObjects = [];
        for (i = 0; i < fileObjects.length; i++) {
            const fileObject = fileObjects[i];
            console.log(JSON.stringify(fileObject));
            returnObjects += fileObject;
            console.log(fileObject.uploadTimestamp);
            var stampDate = dateformat(fileObject.uploadTimestamp, sqlDateFormat);
            console.log(stampDate);
            console.log(fileObject.fileId);
            console.log(fileObject.fileName);
        }
        return fileObjects;
    }
    catch (e) {
        console.log('Error getting files: ', e)
    };
};

//This does not currently support private bucket downloads
/* <downloadURL>/b2api/v2/b2_download_file_by_id?fileID=<fileId> */
/*curl https://f002.backblazeb2.com/b2api/v2/b2_download_file_by_id?fileId=4_ze8e0f5abe02722d66d710411_f1107bac50797b5df_d20181119_m213733_c002_v0001111_t0056
{
  "code": "unauthorized",
  "message": "",
  "status": 401
}*/
const getFileUrl = async function getFile(fileId) {
    var fileName = "/images/" + fileId + '.jpg';
    var fakeImage = '/images/brad_lebowsky.jpg';
    var finalUrl;
    try {
        var authorization = await b2.authorize()
        .then(function(res) {
            // for(var property in res.data) {
            //     console.log(property + "=" + res[property]);
            // }

            const downloadUrl = res.data.downloadUrl;
            const token = res.data.authorizationToken;
            //console.log('DownloadURL: ' + downloadUrl + '\n');
            //console.log('Token: ' + token + "\n");



            //USE b2_get_file_info to retrieve the name and bucket via ID
            //Then use download file by name, which has more examples.
            finalUrl = downloadUrl + "/b2api/v2/b2_download_file_by_id?fileId=" + fileId;
            //finalUrl += "&Authorization=" + token;
            console.log("Final Url: " + finalUrl);
        })

        // var file = (await b2.downloadFileById({
        //     fileId: fileId,
        //     onDownloadProgress: null // progress monitoring
        // })
        // )
        }
    catch (e) {
        console.log('Error getting files: ', e)
    };
    return finalUrl;
};

//getBuckets();
//getFiles(cGAudioBucketId);
//var allImageBucketFiles = getFiles(cGImagesBucketId)

async function createValuesString(bucketId) {
    try {
        var allImageBucketFiles = await getFiles(bucketId)
        var imageDbValues = "";

        for (i = 0; i < allImageBucketFiles.length; i++) {
            const imageObject = allImageBucketFiles[i];
            //console.log(imageObject);
            const stamp = dateformat(imageObject.uploadTimestamp, sqlDateFormat);
            const imageValueString = "('" + imageObject.fileId + "', '" + stamp + "')";

            imageDbValues += imageValueString;
            if (i != allImageBucketFiles.length - 1) {
                imageDbValues += ", ";
            }
        }
        console.log("Image values: " + imageDbValues);
    }
    catch (e) {
        console.log('Error creating values string: ' + e);
    }
    return imageDbValues;
};

function songsJSON() {
    var content = fs.readFileSync("public/objects/songsList.json");
    return content;
};

const sMexports = {
    getFileUrl: getFileUrl
}

module.exports.something = sMexports;
module.exports.songsJSON = songsJSON;


// function createDownloadUrl() {
//     var urlString = "";
//     https://f123.backblazeb2.com/b2api/v5/b2_download_file_by_id
//     return urlString;
// }
// async function uploadImageObjects(bucketId) {
//   try {
//     const valuesString = await createValuesString(bucketId);

//     databaseConnection.connect(function (err) {
//       var date = dateformat(Date(), sqlDateFormat);
//       if (err) throw err;
//       console.log("Connected!");
//       var sql = "INSERT INTO Images2 (imageId, uploadDate) VALUES " + valuesString;
//       console.log("Query String: " + sql);
//       databaseConnection.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("record inserted");
//         console.log(JSON.stringify(result));
//       });
//     });
//   }
//   catch (e) {
//     console.log("Error Uploading Files: " + e);
//   }
// };
// uploadImageObjects(cGImagesBucketId);
