//capture policy timing

var policyNames = [ 'JS-GenerateUUID', 'Verify-API-Key', 'JS-CaptureRequestContent', 
                    'FC-Security','AM-AddCustomHeadersr', 'FC-VerifyQuota', 'Quota-hour', 'Quota-day', 'AM-Addcors', 'AM-AddRateLimitHeaders', 'FC-ErrorHandling', 'AM-SetUUIDError', 'AM-SetApiKeyErrorVariables', 'JS-InvalidAccessToken',
                    'AM-SetInvalidAccessTokenErrorVariables', 'AM-SetAccessTokenErrorVariables', 'AM-SetQuotaHourErrorVariables', 'AM-SetQuotaDayErrorVariables', 'AM-SetResourcePathErrorVariables',
                    'AM-SetInternalServerErrorVariables', 'AM-SetFaultResponse', 'JS-CaptureErrorContent'];

var arraySize = policyNames.length;

var result = {};
var v;

function doOnePolicy(name) {
    
  v = context.getVariable('apigee.metrics.policy.' + name + '.timeTaken');
  
  if(v !== null){
    result[name]= v;
  }
  
}


for(var i = 0; i<arraySize; i++){
    
    this.doOnePolicy(policyNames[i]);
    
}

//capture timing

var requestStartTime = context.getVariable('client.received.start.timestamp');
var targetStartTime  = context.getVariable('target.sent.start.timestamp');
var targetEndTime    = context.getVariable('target.received.end.timestamp');
var requestEndTime   = context.getVariable('system.timestamp');
var totalRequestTime = requestEndTime-requestStartTime;
var totalTargetTime  = targetEndTime-targetStartTime;
var totalProxyTime = totalRequestTime-totalTargetTime;

var timing = {};

timing.totalRequestTime = totalRequestTime;
timing.totalProxyTime = totalProxyTime;
timing.totalTargetTime = totalTargetTime;

timing.timeTakenByPolicies = result;

context.setVariable('bigString', JSON.stringify(timing));

//print(JSON.stringify(result));


