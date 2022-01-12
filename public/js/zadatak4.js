let assert=chai.assert
describe('TestoviParser', function(){
    describe('porediRezultate()', function(){

        it('rezultat1: svi prolaze, rezultat2 svi prolaze- ISTI',function(){
            var rezultatTestiranja1=`{
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

            var rezultatTestiranja2=`{
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

            var objekat=TestoviParser.porediRezultate(rezultatTestiranja1, rezultatTestiranja2)
            assert.equal(objekat.promjena,"100%","Prolaze svi testovi, procenat tacnosti: 100%")
           assert.equal(objekat.greske.length,0, "Nema grešaka!")

                
        });

        
        it('rezultat1: svi prolaze, rezultat2 2 padaju- ISTI',function(){
            var rezultatTestiranja2=`{
                "stats": {
                "suites": 3,
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
            "failures": [
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
            "passes": [
                {
                    "title": "Test1",
                    "fullTitle": "Test1: Prolazi",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    }
            ]
            }` 

            var rezultatTestiranja1=`{
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

            var objekat=TestoviParser.porediRezultate(rezultatTestiranja1, rezultatTestiranja2)
            assert.equal(objekat.promjena,"33.3%","Nazivi testova isti uzima se tacnost rezultata2")
           assert.equal(objekat.greske.length,2, "Test2: Prolazi , Test3: Prolazi");

                
        });

        it('rezultat1: svi prolaze, rezultat2 2 padaju- razliciti testovi',function(){
            var rezultatTestiranja2=`{
                "stats": {
                "suites": 3,
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
            "failures": [
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
            "passes": [
                {
                    "title": "Test1",
                    "fullTitle": "Test1: Prolazi",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    }
            ]
            }` 

            var rezultatTestiranja1=`{
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
                "title": "Test4",
                "fullTitle": "Test4: Prolazi",
                "file": null,
                "duration": 1,
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
                },
                {
                "title": "Test6",
                "fullTitle": "Test6: Prolazi",
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
                    "title": "Test4",
                    "fullTitle": "Test4: Prolazi",
                    "file": null,
                    "duration": 1,
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
                    },
                    {
                    "title": "Test6",
                    "fullTitle": "Test6: Prolazi",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                 }
            ]
            }`

            var objekat=TestoviParser.porediRezultate(rezultatTestiranja1, rezultatTestiranja2)
            assert.equal(objekat.promjena,"66.66666666666666%","razliciti testovi")
           assert.equal(objekat.greske.length,2, "Test2: Prolazi , Test3: Prolazi");

                
        });
        it('rezultat1: svi prolaze, rezultat2 svi prolaze - razliciti testovi',function(){
            var rezultatTestiranja1=`{
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

            var rezultatTestiranja2=`{
                "stats": {
                "suites": 3,
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
                "title": "Test4",
                "fullTitle": "Test4: Prolazi",
                "file": null,
                "duration": 1,
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
                },
                {
                "title": "Test6",
                "fullTitle": "Test6: Prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
             },
             {
             "title": "Test7",
             "fullTitle": "Test7: Prolazi",
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
                "title": "Test5",
                "fullTitle": "Test5: Prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Test6",
                "fullTitle": "Test6: Prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
             }],
            "passes": [
                {
                    "title": "Test4",
                    "fullTitle": "Test4: Prolazi",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                    "title": "Test7",
                    "fullTitle": "Test7: Prolazi",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                 }
            ]
            }`

            var objekat=TestoviParser.porediRezultate(rezultatTestiranja1, rezultatTestiranja2)
            assert.equal(objekat.promjena,"50%","rezultat1 svi prolaze, rezultat2 dva testa od ukupno cetiri padaju ")
           assert.equal(objekat.greske.length,2, "Test5: Prolazi, Test6: Prolazi")

                
        });



        it('rezultat1: svi padaju, rezultat2 svi padaju- razliciti testovi',function(){
            var rezultatTestiranja1=`{
                "stats": {
                "suites": 3,
                "tests": 3,
                "passes": 0,
                "pending": 0,
                "failures": 3,
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
            "failures": [{
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
             }],
            "passes": [
                
            ]
            }` 

            var rezultatTestiranja2=`{
                "stats": {
                "suites": 3,
                "tests": 4,
                "passes": 0,
                "pending": 0,
                "failures": 4,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                "title": "Test4",
                "fullTitle": "Test4: Prolazi",
                "file": null,
                "duration": 1,
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
                },
                {
                "title": "Test6",
                "fullTitle": "Test6: Prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
             },
             {
             "title": "Test7",
             "fullTitle": "Test7: Prolazi",
             "file": null,
             "duration": 0,
             "currentRetry": 0,
             "speed": "fast",
             "err": {}
            }
            ],
            "pending": [],
            "failures": [ {
                "title": "Test4",
                "fullTitle": "Test4: Prolazi",
                "file": null,
                "duration": 1,
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
                },
                {
                "title": "Test6",
                "fullTitle": "Test6: Prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
             },
                {
                "title": "Test7",
                "fullTitle": "Test7: Prolazi",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
             }],
            "passes": [
            ]
            }`

            var objekat=TestoviParser.porediRezultate(rezultatTestiranja1, rezultatTestiranja2)
            assert.equal(objekat.promjena,"100%","svi testovi padaju i svi su razliciti")
           assert.equal(objekat.greske.length,7)

                
        });


        it('Testovi se ne mogu izvrsiti',function(){
            var rezultatTestiranja1=`{
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

            var rezultatTestiranja2=`{
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

            var objekat=TestoviParser.porediRezultate(rezultatTestiranja1, rezultatTestiranja2)
            assert.equal(objekat.promjena,"0%","Testovi se ne mogu izvršiti")
           assert.equal(objekat.greske.length,0, "Nema gresaka")

                
        });
    });

});
