var restify = require('restify');
var builder = require('botbuilder');

var server = restify.createServer();
server.listen(process.env.PORT || 3000, function ()
{
	console.log('%s listening to %s', server.name, server.url);
});

var connector = new builder.ChatConnector
({ appId: '6daecbb7-6b22-440a-ac04-8045b55e4a9c', appPasword: 'u6urhQb9mEnGumjDXbh1x92' });
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

bot.dialog('/', function(session) {
	session.send("Hello world");
});