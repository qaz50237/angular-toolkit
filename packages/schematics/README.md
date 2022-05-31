# `@ionic/angular-toolkit`

A collection of schematics for `@ionic/angular` projects.

This packages is provided by default to all `@ionic/angular` projects by default.


schematics .:page 'ttttt' --project=ktb --debug=false
schematics .:page 'ttttt' --debug=false --project=app  --styleext=scss
schematics .:component 'ttttt/input' --debug=false --project=app  --styleext=scss
schematics .:ionicfeature --name='test' --debug=false
schematics .:ionicfeaturev6 --name='test' --debug=false --project=app --styleext=scss
schematics .:ionicfeature --name='native-bridge-demo' --debug=false --project=app --styleext=scss
schematics .:ionicfeaturecomponent 'native-bridge-demo/input' --debug=false --project=app  --styleext=scss
 --path='src/app/features' 

findRoutingModuleFromOptions options:{"project":"app","name":"ttttt","path":"/src/app","styleext":"css","spec":true,"flat":false,"routePath":""}
export default options:{"styleext":"scss","name":"ttttt","project":"app","spec":true,"flat":false,"routePath":""}