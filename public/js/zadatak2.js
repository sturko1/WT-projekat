let assert=chai.assert
describe('TestoviParser', function(){
    describe('dajTacnost()', function(){

        it('Prolaze svi testovi',function(){
            var rezultatTestiranja=`{
                "stats": {
                "suites": 3,
                "tests": 3,
                "passes": 3,
                "pending": 0,
                "failures": 0,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                "title": "Test1",
                "fullTitle": "Test1: Prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Test2",
                "fullTitle": "Test2: Prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Test3",
                "fullTitle": "Test3: Prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
             }
            ],
            "pending": [],
            "failures": [],
            "passes": [
                {
                    "title": "Test1",
                    "fullTitle": "Test1: Prolazi",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                    "title": "Test2",
                    "fullTitle": "Test2: Prolazi",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                    "title": "Test3",
                    "fullTitle": "Test3: Prolazi",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                 }
            ]
            }` 

            var objekat=TestoviParser.dajTacnost(rezultatTestiranja)
            assert.equal(objekat.tacnost,"100%","Prolaze svi testovi, procenat tacnosti: 100%")
           assert.equal(objekat.greske.length,0, "Nema grešaka!")

                
        });

        it('padaju svi testovi',function(){
            var rezultatTestiranja=`{
                "stats": {
                "suites": 2,
                "tests": 2,
                "passes": 0,
                "pending": 0,
                "failures": 2,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                    {
                        "title": "Test1",
                        "fullTitle": "Test1: Prolazi",
                        "file": null,
                        "duration": 1,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        },
                        {
                        "title": "Test2",
                        "fullTitle": "Test2: Prolazi",
                        "file": null,
                        "duration": 0,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        },
                        {
                        "title": "Test3",
                        "fullTitle": "Test3: Prolazi",
                        "file": null,
                        "duration": 0,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                     }
            ],
            "pending": [],
            "failures": [ 
                 {
                "title": "Test1",
                "fullTitle": "Test1: Prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Test2",
                "fullTitle": "Test2: Prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Test3",
                "fullTitle": "Test3: Prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
             }
            ],
            "passes": []
            }` 

            var objekat=TestoviParser.dajTacnost(rezultatTestiranja)
            assert.equal(objekat.tacnost,"0%","Padaju svi testovi, procenat tačnosti: 0%")
           assert.equal(objekat.greske.length,3, "Imamo tri elementa u nizu tj onoliko koliko imamo testova!")

                
        });

        it('Pada samo jedan test',function(){
            var rezultatTestiranja=`{
                "stats": {
                "suites": 2,
                "tests": 5,
                "passes": 4,
                "pending": 0,
                "failures": 1,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                    {
                        "title": "Test1",
                        "fullTitle": "Test1: Prolazi",
                        "file": null,
                        "duration": 1,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        },
                        {
                        "title": "Test2",
                        "fullTitle": "Test2: Prolazi",
                        "file": null,
                        "duration": 0,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        },
                        {
                        "title": "Test3",
                        "fullTitle": "Test3: Prolazi",
                        "file": null,
                        "duration": 0,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                     },
                     {
                     "title": "Test4",
                     "fullTitle": "Test4: Prolazi",
                     "file": null,
                     "duration": 0,
                     "currentRetry": 0,
                     "speed": "fast",
                     "err": {}
                  },
                  {
                  "title": "Test3",
                  "fullTitle": "Test3: Prolazi",
                  "file": null,
                  "duration": 0,
                  "currentRetry": 0,
                  "speed": "fast",
                  "err": {}
               }
            ],
            "pending": [],
            "failures": [
                {
                    "title": "Test4",
                    "fullTitle": "Test4: Prolazi",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }
            ],
            "passes": [
                {
                    "title": "Test1",
                    "fullTitle": "Test1: Prolazi",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                    "title": "Test2",
                    "fullTitle": "Test2: Prolazi",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                    "title": "Test3",
                    "fullTitle": "Test3: Prolazi",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                 },
                 {
                 "title": "Test5",
                 "fullTitle": "Test5: Prolazi",
                 "file": null,
                 "duration": 0,
                 "currentRetry": 0,
                 "speed": "fast",
                 "err": {}
              }
            ]
            }` 

            var objekat=TestoviParser.dajTacnost(rezultatTestiranja)
            assert.equal(objekat.tacnost,"80%","tacnost mora biti 80%")
           assert.equal(objekat.greske.length,1, "niz mora imati  test i to test4")

                
        });


       

        it('prolazi jedan test',function(){
            var rezultatTestiranja=`{
                "stats": {
                "suites": 2,
                "tests": 3,
                "passes": 1,
                "pending": 0,
                "failures": 2,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                    {
                        "title": "Test1",
                        "fullTitle": "Test1: Prolazi",
                        "file": null,
                        "duration": 1,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        },
                        {
                        "title": "Test2",
                        "fullTitle": "Test2: Prolazi",
                        "file": null,
                        "duration": 0,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        },
                        {
                        "title": "Test3",
                        "fullTitle": "Test3: Prolazi",
                        "file": null,
                        "duration": 0,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                     }
            ],
            "pending": [],
            "failures": [ {
                "title": "Test1",
                "fullTitle": "Test1: Prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Test2",
                "fullTitle": "Test2: Prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
            ],
            "passes": [ 
                {
                "title": "Test3",
                "fullTitle": "Test3: Prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
             }
            ]
            }` 

            var objekat=TestoviParser.dajTacnost(rezultatTestiranja)
            assert.equal(objekat.tacnost,"33.3%","tacnost mora biti 33.3%")
           assert.equal(objekat.greske.length,2, "niz mora imati 2 testa test1 i  test2")

                
        });

        it('Tri testa prolaze a dva padaju',function(){
            var rezultatTestiranja=`{
                "stats": {
                "suites": 2,
                "tests": 5,
                "passes": 3,
                "pending": 0,
                "failures": 2,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                    {
                        "title": "Test1",
                        "fullTitle": "Test1: Prolazi",
                        "file": null,
                        "duration": 1,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        },
                        {
                        "title": "Test2",
                        "fullTitle": "Test2: Prolazi",
                        "file": null,
                        "duration": 0,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        },
                        {
                        "title": "Test3",
                        "fullTitle": "Test3: Prolazi",
                        "file": null,
                        "duration": 0,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                     },
                     {
                     "title": "Test4",
                     "fullTitle": "Test4: Prolazi",
                     "file": null,
                     "duration": 0,
                     "currentRetry": 0,
                     "speed": "fast",
                     "err": {}
                     },
                     {
                     "title": "Test5",
                     "fullTitle": "Test5: Prolazi",
                     "file": null,
                     "duration": 0,
                     "currentRetry": 0,
                     "speed": "fast",
                     "err": {}
                  }
            ],
            "pending": [],
            "failures": [ {
                "title": "Test1",
                "fullTitle": "Test1: Prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Test2",
                "fullTitle": "Test2: Prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
            ],
            "passes": [ 
                {
                "title": "Test3",
                "fullTitle": "Test3: Prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
             },
             {
             "title": "Test4",
             "fullTitle": "Test4: Prolazi",
             "file": null,
             "duration": 0,
             "currentRetry": 0,
             "speed": "fast",
             "err": {}
             },
             {
             "title": "Test5",
             "fullTitle": "Test5: Prolazi",
             "file": null,
             "duration": 0,
             "currentRetry": 0,
             "speed": "fast",
             "err": {}
          }
            ]
            }` 

            var objekat=TestoviParser.dajTacnost(rezultatTestiranja)
            assert.equal(objekat.tacnost,"60%","tacnost mora biti 60%")
           assert.equal(objekat.greske.length,2, "niz mora imati 2 testa")

                
        });
        
        it('testovi se ne mogu izvrsiti',function(){
            var rezultatTestiranja=`{
                "stats": {
                "suites": 2,
                "tests": 3,
                "passes": 1,
                "pending": 0,
                "failures": 2,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                    "title": "Test1",
                    "fullTitle": "Test1: Prolazi",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                    "title": "Test2",
                    "fullTitle": "Test2",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                },
            
                    "fullTitle": "Test3",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }
            ],
            "pending": [],
            "failures": [ {
                "title": "Test1",
                "fullTitle": "Test1: Prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                    "title": "Test2",
                    "fullTitle": "Test2: Prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }],
            "passes": [{
                "title": "Test3",
                "fullTitle": "Test3: Prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }]
            }`

            var objekat=TestoviParser.dajTacnost(rezultatTestiranja)
            assert.equal(objekat.tacnost,"0%","tacnost mora biti 0%")
            assert.equal(objekat.greske, "Testovi se ne mogu izvrsiti", "Testovi se ne mogu izvrsiti")
          

                
        });

        
        it('prolazi pola testova',function(){
            var rezultatTestiranja=`{
                "stats": {
                "suites": 2,
                "tests": 4,
                "passes": 2,
                "pending": 0,
                "failures": 2,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                    "title": "Test2",
                    "fullTitle": "Test2: Prolazi",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                        "title": "Test2",
                        "fullTitle": "Test2: Prolazi",
                        "file": null,
                        "duration": 1,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        },
                        {
                        "title": "Test3",
                        "fullTitle": "Test3: Prolazi",
                        "file": null,
                        "duration": 1,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        },
                        {
                            "title": "Test4",
                            "fullTitle": "Test4: Prolazi",
                        "file": null,
                        "duration": 0,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
            }
            ],
            "pending": [],
            "failures": [ {
                "title": "Test1",
                "fullTitle": "Test1: Prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                    "title": "Test2",
                "fullTitle": "Test2: Prolazi",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    }
            ],
            "passes": [{
                "title": "Test3",
                "fullTitle": "Test3: Prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Test4",
                "fullTitle": "Test4: Prolazi",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }]
            }` 

            var objekat=TestoviParser.dajTacnost(rezultatTestiranja)
            assert.equal(objekat.tacnost,"50%","tacnost mora biti 50%")
           assert.equal(objekat.greske.length,2, "niz mora imati 2 testa test1 i  test2")

                
        });

    });

});
