let assert=chai.assert
let test=document.getElementById("test");
console.log(test);
chai.should();
 
describe('test', function() {

  beforeEach(function() {
    this.xhr = sinon.useFakeXMLHttpRequest();
 
    this.requests = [];
    this.xhr.onCreate = function(xhr) {
      this.requests.push(xhr);
    }.bind(this);
  });
 
  afterEach(function() {
    this.xhr.restore();
  });
 
  
  it('Dodaj input polja 1', function() {
    
   
    VjezbeAjax.dodajInputPolja(test,4);
    assert.equal(test.children.length,9);

   
    
  });
  
  
  it('Dodaj input polja 2' , function() {
    
    VjezbeAjax.dodajInputPolja(test,5);
    assert.equal(test.children.length,11);

   
    
  })

  it('Dohvati podatke 1', function(done) {
    var podaci = {brojVjezbi: 3, brojZadataka: [2,4,7]}
    var dataJson = JSON.stringify(podaci)
    console.log(dataJson);
    VjezbeAjax.dohvatiPodatke(function(err,data) {
        assert.equal(data.brojVjezbi,3)
        assert.equal(data.brojZadataka[0],2)
        assert.equal(data.brojZadataka[1],4)
        assert.equal(data.brojZadataka[2],7)
        done()
       
    })
    this.requests[0].respond(200,{'Content-Type':'text/json'}, dataJson)
  });



  it('Dohvati podatke 2', function(done) {
    var podaci = {brojVjezbi: 4, brojZadataka: [1,2,3,4]}
    var dataJson = JSON.stringify(podaci)
    VjezbeAjax.dohvatiPodatke(function(err,data) {
        assert.equal(data.brojVjezbi,4)
        assert.equal(data.brojZadataka[0],1)
        assert.equal(data.brojZadataka[1],2)
        assert.equal(data.brojZadataka[2],3)
        assert.equal(data.brojZadataka[3],4)
        done()  
    })
    this.requests[0].respond(200,{'Content-Type':'text/json'}, dataJson)
  })

   it('Pošalji podatke 1', function(done) {
    var podaci = {brojVjezbi: 5, brojZadataka: [4,5,6,7,8]}
    var dataJson = JSON.stringify(podaci)
    VjezbeAjax.dodajInputPolja(test,5);
    VjezbeAjax.posaljiPodatke(test,function(err,data) {
      assert.equal(data.brojVjezbi,5)
      assert.equal(data.brojZadataka[0],4)
      assert.equal(data.brojZadataka[1],5)
      assert.equal(data.brojZadataka[2],6)
      assert.equal(data.brojZadataka[3],7)
      assert.equal(data.brojZadataka[4],8)
      done()  
  })
  this.requests[0].respond(200,{'Content-Type':'text/json'}, dataJson)
  }) 

  it('Pošalji podatke 2', function(done) {
    var podaci = {brojVjezbi: 1, brojZadataka: [14]}
    var dataJson = {status:"error", data: "Pogresan parametar z1"};
    var input=document.createElement("input");
    input.setAttribute("value",14);
    VjezbeAjax.posaljiPodatke(test,function(err,data) {
      assert.equal(data.status,"error")
      assert.equal(data.data,"Pogresan parametar z1")
    
      done()  
  })
  this.requests[0].respond(200,{'Content-Type':'text/json'}, JSON.stringify(dataJson))
  })

  it('Iscrtaj vjezbe 1', function() {
    var objekat = {
      brojVjezbi : 5,
      brojZadataka : [1,2,3,4,5]
    }
    var test1 = document.getElementById("test1");
    //(labela + input) * 5 = 10 
    VjezbeAjax.iscrtajVjezbe(test1,objekat);
    assert.equal(test1.children.length,10);
    console.log(test1);
    
  })

  it('Iscrtaj vjezbe 2', function() {
    var objekat = {
      brojVjezbi : 4,
      brojZadataka : [1,2,3,4]
    }
    var test2 = document.getElementById("test2");
    //((labela + input) * 4 = 8 )
    VjezbeAjax.iscrtajVjezbe(test2,objekat);
    assert.equal(test2.children.length,8);
    
    console.log(test2);
    
  })
  it('Iscrtaj zadatke 1', function() {
    var test3 = document.getElementById("test3");
    //4 buttona 
    VjezbeAjax.iscrtajZadatke(test3,4);
    assert.equal(test3.children.length,4);
    
    console.log(test3);
    
  })
  it('Iscrtaj zadatke 2', function() {
   
    var test4 = document.getElementById("test4");
    //5 buttona
    VjezbeAjax.iscrtajZadatke(test4,5);
    assert.equal(test4.children.length,5);
    
    console.log(test4);
    
  })
});
