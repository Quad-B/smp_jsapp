import * as signtool from 'simple-signtool';

const file = path.join(__dirname, 'dist/SMP-JSAPP-1.0.4.exe
');

signtool.sign(file, {
    rawString: '/d mydescription',
    rfcTimeStampUrl: {
        url: 'http://sha1timestamp.ws.symantec.com/sha1/timestamp',
        digestAlgorithm: 'sha256'
    }
});

signtool.sign(file, options);
