context.setVariable('originalRequest', JSON.stringify(JSON.parse(context.getVariable('request.content'))));
context.setVariable('host', context.getVariable('request.header.host'));