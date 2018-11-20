const B2 = require('backblaze-b2');
const dateformat = require('dateformat');

var sqlDateFormat = "yyyy-mm-dd HH:MM:ss";

var b2 = new B2({
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
        });
        const fileObjects = response.data.files;
        console.log("File Count: " + fileObjects.length);
        var returnObjects = [];
        for (i = 0; i < fileObjects.length; i++) {

            const fileObject = fileObjects[i];
            //console.log(JSON.stringify(fileObject));
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

//getBuckets();
const cGAudioBucketId = process.env.B2_CG_AUDIO_BUCKET_ID;
const cGImagesBucketId = process.env.B2_CG_IMAGES_BUCKET_ID;
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
