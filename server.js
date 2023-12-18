
// const Resend = require('resend');
// const express = require('express');
// const admin = require('firebase-admin');
// const schedule = require('node-schedule');
// const serviceAccount = require('./wow.json');
// import { config } from './';
import {Resend} from 'resend';
import express from 'express';
import admin from 'firebase-admin';
import schedule from 'node-schedule';
// import * as serviceAccount from './wow.json' assert { type: 'json' };
// import serviceAccount from './wow.json'
// console.log(serviceAccount);
const serviceAccount = 
  {
    "type": "service_account",
    "project_id": "myweb3gift-bd98e",
    "private_key_id": "b8b190b9303f704258c6feb2b63487e387dcd74b",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDQBzsiSRmeiIdH\n99TyZQa/sSyAFo6k63Dv2H76+QKTXi65ybRjVllJlmltRLgBrF4eTpWXiODTyE85\n6qIUHgnorOrc1VA/S3qUBltjyOnJOnwnyabBzamEg1DvOz3P7df5cwtkuKfjD9Qi\nRgHsvHXGgYEaz2A/jApu3BYlI0SRMG9mbW99HYT8jpXoQSyAq+6PmjfrVXGHcHae\nNqLyUkupIp/vOhlNoBoNgtOzSpMmnvduokRwK+XtXYLwOPMUChU76k0QDEuYOhwY\nW3o9Rx3Rdhmj1WOePKBzvQRpLUlwq+SaxPQWH+dioSlCutsM6YHixyVXNiDF9I+R\nMa87eGuLAgMBAAECggEAPlcEZgxg9Iy2eZ8vven/gT9/de0MlyiFIiMPPneTyYTO\nXNewypoMTMyZ0Gho+ftlAxEKrCwVL/IVp+YD5yJvVr5G7aGxGB6u36AeEAOb57Uy\nkpvP8MEIfVD61o46wk5ky/ipX+gkS5upNxIiroZ1huS1Q0sE7VYypDEpI7zzZcyD\nCp2fOP+reczhxOOUN3JHwbFfJI3u6XzWG5MhjiBiwHUDcN5btQEu6Y7SsEo/Ud3u\nUWATF0Ko1Z46JG/+6ICIfMrOtHAQwnxUAm1iTCv/ZD8HTPxp/nfHigpdk/Eay9uy\n5/p9sOGn4c32Z5LlrPbNAzQBIRrv7khT5EH/OjansQKBgQDxR7LJMFaYPnP4zkWg\nGGZnkViofH3Uth6pnyA67GrZmGbAeqgriYkDmPFUog3n41stNWTw94G9E6OKDoO+\nvGSvTh3un7IO/iLV1gx3HvXe/sXYbXyjbw3utiNlM2POVKhPu2kP8tlOqLpjEpkL\nJhpjv+AduClUSAxsjcOdWSK6kQKBgQDcuDUBGznftUFM7thspbY+k+2ktP0lrDSt\n72+aU/9NFlXgLH7xP4NZwhjhddDG+TxsOyaMREzNTxRQZxln+vmO+MNtTVL0Qdst\nRjHHQt0QY6oQAVFT292s6dyMYIoQD3LHf3mkKEoqK7SFjcBwEFu4NZ7U0piKIMTG\n9Z1GsUd6WwKBgBSXUtm6p1k80zbjm6uLCYpDLDbM0QxLMpi1PNHqhT/msrYwgZOd\nnDTTY50ea2Nj0s8r5F5wMQFK4MUScgngGBOh7goEVPTUmXJ4Xv33hXIvegD7bwyf\nmKfLoX+sgBMGxIpxawjyZ7s/yRBVcPwzl0L2CBFhOx23PGAzRQNzrPQRAoGBAKHt\nQnWdU8gbYdzfHUgYCqu+Owoq/c01mTBCCM5f8VzMlhPwkPDMd8DR9Q7zMEfJcdq1\nSoJ9WRsGeRDDkpAGQC/zsOvvXnx0FCgS51IYa7YqaAl17gRnuSmyKGuUJ7XAn6Rc\nkREtvbtSdQ3GAPg2CBQMwonANsifYb3VU50ZUichAoGBAL2dIGdHQ598YnF2UO1b\nA6KZ0TnpzpyfHYnvKZaVtYnQthFgH/xPh02TNLEtb3R7mYT7k8cX+uh92zcaWcKV\n7WM55y3tfk+7muAt/7PA3+aoUl8wUbP4N8h8OcU3WXTSvjTI1b08jT5Qybc+U2vJ\nYdisMEDVw/QFFIVNGROvDyhI\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-8myu8@myweb3gift-bd98e.iam.gserviceaccount.com",
    "client_id": "117758755086623339970",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-8myu8%40myweb3gift-bd98e.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
  



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://myweb3gift-bd98e-default-rtdb.firebaseio.com',
});
console.log(serviceAccount);

const db = admin.firestore();
const usersCollection = db.collection('users');

const resend = new Resend('re_TiecH7RY_EE6isgzKE5CuBnzZ3337caUM');
const app = express();
const PORT = process.env.PORT || 3002;

// Your other code...

const updateCurrentDay = async () => {
  // Your updateCurrentDay function...
  try {
    // Query all documents in the "progress" collection group
    const progressSnapshot = await db.collectionGroup('progress').get();
    console.log(progressSnapshot)
    // Update currentDay for each progress document named "1"
    const updatePromises = progressSnapshot.docs.map(async (progressDoc) => {
      console.log(progressDoc.data());
      const currentDay = progressDoc.data().currentDay;

      // Increase currentDay by 1
      const updatedDay = currentDay + 1;

      // Update currentDay to the increased value
      await progressDoc.ref.update({ currentDay: updatedDay });
      console.log(`CurrentDay updated for progress document ${progressDoc.id}. New value: ${updatedDay}`);
    });

    await Promise.all(updatePromises);

    console.log('Update completed');
  } catch (error) {
    console.error('Error updating currentDay:', error);
  }

};

// Schedule the update to run at midnight every day
schedule.scheduleJob('32 21 * * *', updateCurrentDay);
app.get('/', async (req, res) => {
  try {
    const data = await resend.emails.send({
      from: 'Acme <arpitsinghthakur321@myweb3gift.com>',
      to: ['ashispandey138c@gmail.com'],
      subject: 'Hello World',
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->
    <!--[if !mso]><!-- -->
    <link href="https://fonts.googleapis.com/css2?family=Changa:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">
    <!--<![endif]-->
</head>

<body>
    <div dir="ltr" class="es-wrapper-color">
        <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" src="https://tlr.stripocdn.email/content/guids/CABINET_d9e64e61bd5ab14658ef0c95d79249160dd08cb38b25b963906cfe6c64bad7ae/images/bgtemplate.png" color="#374769" origin="0.5, 0" position="0.5, 0"></v:fill>
			</v:background>
		<![endif]-->
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" background="https://tlr.stripocdn.email/content/guids/CABINET_d9e64e61bd5ab14658ef0c95d79249160dd08cb38b25b963906cfe6c64bad7ae/images/bgtemplate.png" style="background-position: center top;">
            <tbody>
                <tr>
                    <td class="esd-email-paddings es-m-margin" valign="top">
                        <table class="es-content esd-header-popover" cellspacing="0" cellpadding="0" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center">
                                        <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" style="background-color: transparent;">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure" align="left" esd-custom-block-id="1045556">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="600" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-spacer" height="112"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://tlr.stripocdn.email/content/guids/CABINET_d9e64e61bd5ab14658ef0c95d79249160dd08cb38b25b963906cfe6c64bad7ae/images/2342343242x.png" alt style="display: block;" width="600"></a></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure es-p20t es-p40b es-p20r es-p20l" align="left" style="background-color: #fbf3ea;" bgcolor="#fbf3ea" esd-custom-block-id="1045557">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text es-m-txt-c">
                                                                                        <h1 style="line-height: 100%; ">Christmas&nbsp;</h1>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text es-m-txt-c">
                                                                                        <h2 style="line-height: 110%;">PARTY!!</h2>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-image es-p10t es-p10b" style="font-size: 0px;"><a target="_blank"><img src="https://tlr.stripocdn.email/content/guids/CABINET_d9e64e61bd5ab14658ef0c95d79249160dd08cb38b25b963906cfe6c64bad7ae/images/star.png" alt style="display: block;" width="54"></a></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text es-m-txt-c">
                                                                                        <h3>LIVE MUSIC BEER AND LOTS OF MAGIC</h3>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text es-p20t">
                                                                                        <p>We know how to throw a great party! Delicious festive food, plenty of Christmas spirit and loads of fun are on the menu for a splendid night. Bring your friends and colleagues along for a fabulous time at the top <strong>Christmas party!</strong></p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-button es-p30t">
                                                                                        <!--[if mso]><a href="https://viewstripo.email/" target="_blank" hidden>
	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://viewstripo.email/" 
                style="height:44px; v-text-anchor:middle; width:183px" arcsize="50%" stroke="f"  fillcolor="#e7a31f">
		<w:anchorlock></w:anchorlock>
		<center style='color:#ffffff; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:14px; font-weight:700; line-height:14px;  mso-text-raise:1px'>LEARN MORE</center>
	</v:roundrect></a>
<![endif]-->
                                                                                        <!--[if !mso]><!-- --><span class="msohide es-button-border" style="border-color: #ff564e; background: #008c7c;"><a href="https://viewstripo.email/" class="es-button" target="_blank">LEARN MORE</a></span>
                                                                                        <!--<![endif]-->
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="es-footer" cellspacing="0" cellpadding="0" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center" esd-custom-block-id="1045558">
                                        <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                                                        <table cellspacing="0" cellpadding="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="esd-container-frame" width="560" align="left">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-social es-p15t es-p15b" style="font-size:0">
                                                                                        <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td align="center" valign="top" class="es-p10r"><a target="_blank" href="https://www.facebook.com/stripoeditor/"><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-white/facebook-logo-white.png" alt="Fb" title="Facebook" width="32"></a></td>
                                                                                                    <td align="center" valign="top" class="es-p10r"><a target="_blank" href="https://twitter.com/Stripo_email"><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-white/x-logo-white.png" alt="X" title="X.com" width="32"></a></td>
                                                                                                    <td align="center" valign="top" class="es-p10r"><a target="_blank" href="https://www.instagram.com/stripo.email/"><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-white/instagram-logo-white.png" alt="Ig" title="Instagram" width="32"></a></td>
                                                                                                    <td align="center" valign="top" class="es-p10r"><a target="_blank" href="https://www.youtube.com/channel/UCnPMarkPEGzk-3fTM9Jxgcw"><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-white/youtube-logo-white.png" alt="Yt" title="Youtube" width="32"></a></td>
                                                                                                    <td align="center" valign="top"><a target="_blank" href="https://www.pinterest.com/StripoEmail/"><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-white/pinterest-logo-white.png" alt="P" title="Pinterest" width="32"></a></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text es-p10t">
                                                                                        <p>If you think this message was sent to you in error, you can <a target="_blank">unsubscribe</a>.</p>
                                                                                        <p>Please refer to our <a target="_blank">privacy policy</a> for more information.</p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center">
                                        <table class="es-content-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" bgcolor="#c9dcff" align="center">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" style="background-position: left top;" align="left">
                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="esd-block-image es-infoblock made_with" align="center" style="font-size:0"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=christmas_4_2024&utm_content=miracles_at_christmas"><img src="https://tlr.stripocdn.email/content/guids/cab_pub_7cbbc409ec990f19c78c75bd1e06f215/images/78411525331495932.png" alt style="display: block;" width="125"></a></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>`,
    });

    res.status(200).json(data);
  } catch(error) {
    res.status(400).json(error);
  }
})


app.listen(3001, () => {
  // if (!process.env.RESEND_API_KEY) {
  //   throw `Abort: You need to define RESEND_API_KEY in the .env file.`;
  // }

  console.log('Listening on http://localhost:3001');
});