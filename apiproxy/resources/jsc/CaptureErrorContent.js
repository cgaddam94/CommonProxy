// print(context.getVariable('fault.name'));
//context.setVariable('errorMessage', context.getVariable('message.content'));
//print(context.getVariable('errorMessage'));
context.setVariable('errorMessage', JSON.stringify(JSON.parse(context.getVariable('message.content'))));