var errorMessage = JSON.parse(context.getVariable('message.content'));
context.setVariable('flow.error.statusCode',errorMessage.StatusCode);
context.setVariable('flow.error.reasonPhrase',context.getVariable('error.reason.phrase'));
context.setVariable('flow.error.systemMessage',errorMessage.ErrorMessage);
context.setVariable('flow.error.userMessage',errorMessage.ErrorDetails);
context.setVariable('flow.error.validationMessage',JSON.stringify(errorMessage.ValidationErrors));
print(context.getVariable('error.reason.phrase'));



