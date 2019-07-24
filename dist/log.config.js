"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var morgan=require("morgan"),fs=require("fs"),FileStreamRotator=require("file-stream-rotator"),path=require("path"),logConfig=function(e){var r=path.join(__dirname,"../logs");fs.existsSync(r)||fs.mkdirSync(r);var t=FileStreamRotator.getStream({date_format:"YYYYMMDD",filename:path.join(r,"%DATE%-access.log"),frequency:"daily",verbose:!1});morgan.token("my_token",function(e,r){return e.query.from||""}),morgan(function(e,r,t){return[e["remote-addr"](r,t),e.method(r,t),e["http-version"](r,t),e.url(r,t),e["user-agent"](r,t),e.referrer(r,t),e["remote-user"](r,t),e.req(r,t),e.status(r,t),e.res(r,t,"content-length"),"-",e["response-time"](r,t),"ms",e.from].join("****")}),e.use(morgan("",{stream:t}))};exports.default=logConfig;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZy5jb25maWcuanMiXSwibmFtZXMiOlsibW9yZ2FuIiwicmVxdWlyZSIsImZzIiwiRmlsZVN0cmVhbVJvdGF0b3IiLCJwYXRoIiwibG9nQ29uZmlnIiwiZXhpc3RzU3luYyIsImxvZ0RpcmVjdG9yeSIsIl9fZGlybmFtZSIsIm1rZGlyU3luYyIsImRhdGVfZm9ybWF0IiwiYWNjZXNzTG9nU3RyZWFtIiwiZmlsZW5hbWUiLCJ0b2tlbiIsInJlcSIsInJlcyIsInF1ZXJ5IiwiZnJvbSIsInRva2VucyIsInN0cmVhbSIsImpvaW4iLCJhcHAiLCJ1c2UiXSwibWFwcGluZ3MiOiJvRUFBQSxJQUFJQSxPQUFTQyxRQUFRLFVBQ2pCQyxHQUFLRCxRQUFRLE1BQ2JFLGtCQUFvQkYsUUFBUSx1QkFDNUJHLEtBQU9ILFFBQVEsUUFEZkUsVUFBQUEsU0FBQUEsR0FLQUUsSUFBQUEsRUFBWUQsS0FBWkMsS0FBQUEsVUFBbUIsV0FHbkJILEdBQUFJLFdBQUlDLElBQXlCQyxHQUFBQSxVQUFXRCxHQUV4Q0wsSUFBR0ksRUFBV0Msa0JBQW9CRSxXQUc5QkMsWUFBYSxXQURiQyxTQUFBQSxLQUFBQSxLQUFrQlIsRUFBQUEscUJBQ2xCTyxVQUFBQSxRQUNBRSxTQUFBQSxJQVlKWixPQUFPYSxNQUFNLFdBQVksU0FBQ0MsRUFBS0MsR0FEL0IsT0FBQUQsRUFBQUUsTUFBQUMsTUFBQSxLQU1BakIsT0FBQSxTQUFBa0IsRUFBQUosRUFBQUMsR0FDQWYsT0FDSWtCLEVBQ0lBLGVBQU9KLEVBQWVBLEdBRjlCSSxFQUFBLE9BQUFKLEVBQUFDLEdBSVFHLEVBQU8sZ0JBQWdCSixFQUFLQyxHQWU1QmYsRUFBQUEsSUFBWW1CLEVBQUFBLEdBYlpELEVBQU8sY0FBY0osRUFBS0MsR0FlbENHLEVBQUEsU0FBQUosRUFBQUMsR0FoREpHLEVBQUEsZUFBQUosRUFBQUMsR0FvQ1lHLEVBQUEsSUFBY0osRUFBS0MsR0FDbkJHLEVBQUEsT0FBaUJKLEVBQUtDLEdBQ3RCRyxFQUFBLElBQWNKLEVBQUtDLEVBQUssa0JBQW1CLElBQzNDRyxFQUFPLGlCQUFpQkosRUFBS0MsR0FBTSxLQUNuQ0csRUFBQSxNQUNGRSxLQUFLLFVBS1hDLEVBQUlDLElBQUl0QixPQUFPLElBQUttQixPQUFRUixzQkFNakJOIiwiZmlsZSI6ImxvZy5jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbW9yZ2FuID0gcmVxdWlyZSgnbW9yZ2FuJyk7XHJcbnZhciBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxudmFyIEZpbGVTdHJlYW1Sb3RhdG9yID0gcmVxdWlyZSgnZmlsZS1zdHJlYW0tcm90YXRvcicpO1xyXG52YXIgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG5cclxuXHJcblxyXG5sZXQgbG9nQ29uZmlnID0gYXBwID0+IHtcclxuXHJcblxyXG4gICAgbGV0IGxvZ0RpcmVjdG9yeSA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9sb2dzJyk7XHJcblxyXG4gICAgZnMuZXhpc3RzU3luYyhsb2dEaXJlY3RvcnkpIHx8IGZzLm1rZGlyU3luYyhsb2dEaXJlY3RvcnkpO1xyXG5cclxuICAgIGxldCBhY2Nlc3NMb2dTdHJlYW0gPSBGaWxlU3RyZWFtUm90YXRvci5nZXRTdHJlYW0oe1xyXG4gICAgICAgIGRhdGVfZm9ybWF0OiAnWVlZWU1NREQnLFxyXG4gICAgICAgIGZpbGVuYW1lOiBwYXRoLmpvaW4obG9nRGlyZWN0b3J5LCAnJURBVEUlLWFjY2Vzcy5sb2cnKSxcclxuICAgICAgICBmcmVxdWVuY3k6ICdkYWlseScsXHJcbiAgICAgICAgdmVyYm9zZTogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBkYlN0cmVhbSA9IHtcclxuICAgICAgICB3cml0ZShsaW5lKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpbmUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDoh6rlrprkuYl0b2tlbizojrflj5bor7fmsYLlj4LmlbBcclxuICAgIG1vcmdhbi50b2tlbignbXlfdG9rZW4nLCAocmVxLCByZXMpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVxLnF1ZXJ5LmZyb20gfHwgJydcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyDoh6rlrprkuYlmb3JtYXRcclxuICAgIG1vcmdhbigodG9rZW5zLCByZXEsIHJlcykgPT4ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRva2Vuc1sncmVtb3RlLWFkZHInXShyZXEsIHJlcyksXHJcbiAgICAgICAgICAgIHRva2Vuc1snbWV0aG9kJ10ocmVxLCByZXMpLFxyXG4gICAgICAgICAgICB0b2tlbnNbJ2h0dHAtdmVyc2lvbiddKHJlcSwgcmVzKSxcclxuICAgICAgICAgICAgdG9rZW5zWyd1cmwnXShyZXEsIHJlcyksXHJcbiAgICAgICAgICAgIHRva2Vuc1sndXNlci1hZ2VudCddKHJlcSwgcmVzKSxcclxuICAgICAgICAgICAgdG9rZW5zWydyZWZlcnJlciddKHJlcSwgcmVzKSxcclxuICAgICAgICAgICAgdG9rZW5zWydyZW1vdGUtdXNlciddKHJlcSwgcmVzKSxcclxuICAgICAgICAgICAgdG9rZW5zWydyZXEnXShyZXEsIHJlcyksXHJcbiAgICAgICAgICAgIHRva2Vuc1snc3RhdHVzJ10ocmVxLCByZXMpLFxyXG4gICAgICAgICAgICB0b2tlbnNbJ3JlcyddKHJlcSwgcmVzLCAnY29udGVudC1sZW5ndGgnKSwgJy0nLFxyXG4gICAgICAgICAgICB0b2tlbnNbJ3Jlc3BvbnNlLXRpbWUnXShyZXEsIHJlcyksICdtcycsXHJcbiAgICAgICAgICAgIHRva2Vuc1snZnJvbSddXHJcbiAgICAgICAgXS5qb2luKCcqKioqJylcclxuICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICBhcHAudXNlKG1vcmdhbignJywge3N0cmVhbTogYWNjZXNzTG9nU3RyZWFtfSkpO1xyXG5cclxuICAgIC8vIGFwcC51c2UobW9yZ2FuKCdjb21iaW5lZCcsIHsgc3RyZWFtOiBkYlN0cmVhbSB9KSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dDb25maWc7Il19