# The Cristian Care Project

### It aims to give a free and open-source Web Software to whom want to manager its congregant also as a community of IT Servants of God`s Kingdom.

This application you are reading just now provides a site that contains four kinds of information
about [Cuidado Cristao](https://github.com/rizikoblogger/cuidado-cristao) Web Application:

* The first one related to HOW TO INSTALL AND USE;
* The second is about HOW TO MAINTAIN (OR EXPAND) ITS SOURCE-CODE; and
* The third one is HOW TO SUPPORT AND COLLABORATE WITH THE PROJECT
* The final one is HOW TO CONTACT US
* Fell free to navigate among this information or contact us for more information.

> IF YOU ARE NOT A JAVASCRIPT DEVELOPER, WE REALLY RECOMMEND YOU TO USE
> THE [WEB VERSION](https://cristian-care.riziko.app.br) OF THIS APPLICATION.

### The Framework we used to build this app is based on a [Sails v1](https://sailsjs.com) application

### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)

### Version info

This app was originally generated on Sun Oct 13 2024 15:22:17 GMT-0300 (Horário Padrão de Brasília) using Sails v1.5.12.

<!-- Internally, Sails used [`sails-generate@2.0.12`](https://github.com/balderdashy/sails-generate/tree/v2.0.12/lib/core-generators/new). -->


This project's boilerplate is based on an expanded seed app provided by the [Sails core team](https://sailsjs.com/about)
to make it easier for you to build on top of ready-made features like authentication, enrollment, email verification,
and billing. For more information, [drop us a line](https://sailsjs.com/support).


### Environment Variable

To run this app, you will need to set the following environment variables

* `NODE_ENV` to `production` or `development`.
* `MONGO_URL` to the URL of your MongoDB database.
* `BASE_URL` to the URL of your app.
* `SENDGRID_SECRET` to configure this to enable support for automated emails.
* `FROM_EMAIL_ADDRESS` as mail address for receiving support messages and other correspondences.
* `STRIPE_PUBLISHABLE_KEY` to get available secure payment methods.
* `STRIPE_SECRET` to get available secure payment methods.

or you can set the [local] environment by creating one [/config/local.js] file containing:

```
module.exports = {
   datastores: {
        default: {
           adapter: 'sails-disk'
        }
  }
}
```

<!--
Note:  Generators are usually run using the globally installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

