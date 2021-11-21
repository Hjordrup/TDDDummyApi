# TDDDummyApi A quick api that is made using TDD. 
The API return the time if a get request is made on lcoalhost:3000/time
The API return the date if a get request is made on lcoalhost:3000/date
The API return hours miniuts and seconds calculated based on a given amount of seconds if a post request is made on lcoalhost:3000/time i.e a post requst with a json object l
like this {timre:3601} return a json like this {convertedTime: 1:hour 0:minute 1:second}

## The API is made using express --no-view (Express generator) 
The framework used for testing is **Jest** and **supertest**.  
Jest is a general testing framework where supertest makes it possible to test routes by making a fake http request. 
