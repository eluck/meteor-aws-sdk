Tinytest.add('aws-sdk', function (test) {
  var isDefined = false;
  try {
    AWS;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "AWS is not defined");

  var s3 = new AWS.S3();
  test.isTrue(s3, "Cannot get instance of AWS.S3");
  test.isTrue(s3.putObject, "Cannot get reference of S3.putObject");
});
