<?php
        $tex = $_POST['txtCon'];
        $cad = $_POST['tipo'];

        
            $n_caracteres=strlen($tex);
            for( $i=0; $i < $n_caracteres ; $i++ ){


                if ($cad == "DEC") {
                    if ($tex[$i] == "A") {
                        echo(" "."65");
                    }   
                    elseif($tex[$i] == "B"){
                        echo(" "."66");
                    }
                    elseif($tex[$i] == "C"){
                        echo(" "."67");
                    }
                    elseif($tex[$i] == "D"){
                        echo(" "."68");
                    }
                    elseif($tex[$i] == "E"){
                        echo(" "."69");
                    }
                    elseif($tex[$i] == "F"){
                        echo(" "."70");
                    }
                    elseif($tex[$i] == "G"){
                        echo(" "."71");
                    }
                    elseif($tex[$i] == "H"){
                        echo(" "."72");
                    }
                    elseif($tex[$i] == "I"){
                        echo(" "."73");
                    }
                    elseif($tex[$i] == "J"){
                        echo(" "."74");
                    }
                    elseif($tex[$i] == "K"){
                        echo(" "."75");
                    }
                    elseif($tex[$i] == "L"){
                        echo(" "."76");
                    }
                    elseif($tex[$i] == "M"){
                        echo(" "."77");
                    }
                    elseif($tex[$i] == "N"){
                        echo(" "."78");
                    }
                    elseif($tex[$i] == "O"){
                        echo(" "."79");
                    }
                    elseif($tex[$i] == "P"){
                        echo(" "."80");
                    }
                    elseif($tex[$i] == "Q"){
                        echo(" "."81");
                    }
                    elseif($tex[$i] == "R"){
                        echo(" "."82");
                    }
                    elseif($tex[$i] == "S"){
                        echo(" "."83");
                    }
                    elseif($tex[$i] == "T"){
                        echo(" "."84");
                    }
                    elseif($tex[$i] == "U"){
                        echo(" "."85");
                    }
                    elseif($tex[$i] == "V"){
                        echo(" "."86");
                    }
                    elseif($tex[$i] == "W"){
                        echo(" "."87");
                    }
                    elseif($tex[$i] == "X"){
                        echo(" "."88");
                    }
                    elseif($tex[$i] == "Y"){
                        echo(" "."89");
                    }
                    elseif($tex[$i] == "Z"){
                        echo(" "."90");
                    }


                    elseif($tex[$i] == "a") {
                        echo(" "."97");
                    }
                    elseif($tex[$i] == "b"){
                        echo(" "."98");
                    }
                    elseif($tex[$i] == "c"){
                        echo(" "."99");
                    }
                    elseif($tex[$i] == "d"){
                        echo(" "."100");
                    }
                    elseif($tex[$i] == "e"){
                        echo(" "."101");
                    }
                    elseif($tex[$i] == "f"){
                        echo(" "."102");
                    }
                    elseif($tex[$i] == "g"){
                        echo(" "."103");
                    }
                    elseif($tex[$i] == "h"){
                        echo(" "."104");
                    }
                    elseif($tex[$i] == "i"){
                        echo(" "."105");
                    }
                    elseif($tex[$i] == "j"){
                        echo(" "."106");
                    }
                    elseif($tex[$i] == "k"){
                        echo(" "."107");
                    }
                    elseif($tex[$i] == "l"){
                        echo(" "."108");
                    }
                    elseif($tex[$i] == "m"){
                        echo(" "."109");
                    }
                    elseif($tex[$i] == "n"){
                        echo(" "."110");
                    }
                    elseif($tex[$i] == "o"){
                        echo(" "."111");
                    }
                    elseif($tex[$i] == "p"){
                        echo(" "."112");
                    }
                    elseif($tex[$i] == "q"){
                        echo(" "."113");
                    }
                    elseif($tex[$i] == "r"){
                        echo(" "."114");
                    }
                    elseif($tex[$i] == "s"){
                        echo(" "."115");
                    }
                    elseif($tex[$i] == "t"){
                        echo(" "."116");
                    }
                    elseif($tex[$i] == "u"){
                        echo(" "."117");
                    }
                    elseif($tex[$i] == "v"){
                        echo(" "."118");
                    }
                    elseif($tex[$i] == "w"){
                        echo(" "."119");
                    }
                    elseif($tex[$i] == "x"){
                        echo(" "."120");
                    }
                    elseif($tex[$i] == "y"){
                        echo(" "."121");
                    }
                    elseif($tex[$i] == "z"){
                        echo(" "."122");
                    }
                    

                    elseif($tex[$i] == 0){
                        echo(" "."48");
                    }
                    elseif($tex[$i] == 1){
                        echo(" "."49");
                    }
                    elseif($tex[$i] == 2){
                        echo(" "."50");
                    }
                    elseif($tex[$i] == 3){
                        echo(" "."51");
                    }
                    elseif($tex[$i] == 4){
                        echo(" "."52");
                    }
                    elseif($tex[$i] == 5){
                        echo(" "."53");
                    }
                    elseif($tex[$i] == 6){
                        echo(" "."54");
                    }
                    elseif($tex[$i] == 7){
                        echo(" "."55");
                    }
                    elseif($tex[$i] == 8){
                        echo(" "."56");
                    }
                    elseif($tex[$i] == 9){
                        echo(" "."57");
                    }
                }


                else if ($cad == "HEX") {
                    if ($tex[$i] == "A") {
                        echo(" "."41");
                    }
                    elseif($tex[$i] == "B"){
                        echo(" "."42");
                    }
                    elseif($tex[$i] == "C"){
                        echo(" "."43");
                    }
                    elseif($tex[$i] == "D"){
                        echo(" "."44");
                    }
                    elseif($tex[$i] == "E"){
                        echo(" "."45");
                    }
                    elseif($tex[$i] == "F"){
                        echo(" "."46");
                    }
                    elseif($tex[$i] == "G"){
                        echo(" "."47");
                    }
                    elseif($tex[$i] == "H"){
                        echo(" "."48");
                    }
                    elseif($tex[$i] == "I"){
                        echo(" "."49");
                    }
                    elseif($tex[$i] == "J"){
                        echo(" "."4A");
                    }
                    elseif($tex[$i] == "K"){
                        echo(" "."4B");
                    }
                    elseif($tex[$i] == "L"){
                        echo(" "."4C");
                    }
                    elseif($tex[$i] == "M"){
                        echo(" "."4D");
                    }
                    elseif($tex[$i] == "N"){
                        echo(" "."4E");
                    }
                    elseif($tex[$i] == "O"){
                        echo(" "."4F");
                    }
                    elseif($tex[$i] == "P"){
                        echo(" "."50");
                    }
                    elseif($tex[$i] == "Q"){
                        echo(" "."51");
                    }
                    elseif($tex[$i] == "R"){
                        echo(" "."52");
                    }
                    elseif($tex[$i] == "S"){
                        echo(" "."53");
                    }
                    elseif($tex[$i] == "T"){
                        echo(" "."54");
                    }
                    elseif($tex[$i] == "U"){
                        echo(" "."55");
                    }
                    elseif($tex[$i] == "V"){
                        echo(" "."56");
                    }
                    elseif($tex[$i] == "W"){
                        echo(" "."57");
                    }
                    elseif($tex[$i] == "X"){
                        echo(" "."58");
                    }
                    elseif($tex[$i] == "Y"){
                        echo(" "."59");
                    }
                    elseif($tex[$i] == "Z"){
                        echo(" "."5A");
                    }


                    elseif($tex[$i] == "a") {
                        echo(" "."61");
                    }
                    elseif($tex[$i] == "b"){
                        echo(" "."62");
                    }
                    elseif($tex[$i] == "c"){
                        echo(" "."63");
                    }
                    elseif($tex[$i] == "d"){
                        echo(" "."64");
                    }
                    elseif($tex[$i] == "e"){
                        echo(" "."65");
                    }
                    elseif($tex[$i] == "f"){
                        echo(" "."66");
                    }
                    elseif($tex[$i] == "g"){
                        echo(" "."67");
                    }
                    elseif($tex[$i] == "h"){
                        echo(" "."68");
                    }
                    elseif($tex[$i] == "i"){
                        echo(" "."68");
                    }
                    elseif($tex[$i] == "j"){
                        echo(" "."6A");
                    }
                    elseif($tex[$i] == "k"){
                        echo(" "."6B");
                    }
                    elseif($tex[$i] == "l"){
                        echo(" "."6C");
                    }
                    elseif($tex[$i] == "m"){
                        echo(" "."6D");
                    }
                    elseif($tex[$i] == "n"){
                        echo(" "."6E");
                    }
                    elseif($tex[$i] == "o"){
                        echo(" "."6F");
                    }
                    elseif($tex[$i] == "p"){
                        echo(" "."70");
                    }
                    elseif($tex[$i] == "q"){
                        echo(" "."71");
                    }
                    elseif($tex[$i] == "r"){
                        echo(" "."72");
                    }
                    elseif($tex[$i] == "s"){
                        echo(" "."73");
                    }
                    elseif($tex[$i] == "t"){
                        echo(" "."74");
                    }
                    elseif($tex[$i] == "u"){
                        echo(" "."75");
                    }
                    elseif($tex[$i] == "v"){
                        echo(" "."76");
                    }
                    elseif($tex[$i] == "w"){
                        echo(" "."77");
                    }
                    elseif($tex[$i] == "x"){
                        echo(" "."78");
                    }
                    elseif($tex[$i] == "y"){
                        echo(" "."79");
                    }
                    elseif($tex[$i] == "z"){
                        echo(" "."7A");
                    }


                    elseif($tex[$i] == 0){
                        echo(" "."30");
                    }
                    elseif($tex[$i] == 1){
                        echo(" "."31");
                    }
                    elseif($tex[$i] == 2){
                        echo(" "."32");
                    }
                    elseif($tex[$i] == 3){
                        echo(" "."33");
                    }
                    elseif($tex[$i] == 4){
                        echo(" "."34");
                    }
                    elseif($tex[$i] == 5){
                        echo(" "."35");
                    }
                    elseif($tex[$i] == 6){
                        echo(" "."36");
                    }
                    elseif($tex[$i] == 7){
                        echo(" "."37");
                    }
                    elseif($tex[$i] == 8){
                        echo(" "."38");
                    }
                    elseif($tex[$i] == 9){
                        echo(" "."39");
                    }
                }


                // elseif ($cad == "BIN") {
                //     if($tex[$i] == 0){
                //         echo(" "."00110000");
                //     }
                //     elseif($tex[$i] == 1){
                //         echo(" "."00110001");
                //     }
                //     elseif($tex[$i] == 2){
                //         echo(" "."00110010");
                //     }
                //     elseif($tex[$i] == 3){
                //         echo(" "."00110011");
                //     }
                //     elseif($tex[$i] == 4){
                //         echo(" "."00110100");
                //     }
                //     elseif($tex[$i] == 5){
                //         echo(" "."00110101");
                //     }
                //     elseif($tex[$i] == 6){
                //         echo(" "."00110110");
                //     }
                //     elseif($tex[$i] == 7){
                //         echo(" "."00110111");
                //     }
                //     elseif($tex[$i] == 8){
                //         echo(" "."00111000");
                //     }
                //     elseif($tex[$i] == 9){
                //         echo(" "."00111001");
                //     }


                //     elseif($tex[$i] == "A"){
                //         echo(" "."01000001");
                //     }
                //     elseif($tex[$i] == "B"){
                //         echo(" "."01000010");
                //     }
                //     elseif($tex[$i] == "C"){
                //         echo(" "."01000011");
                //     }
                //     elseif($tex[$i] == "D"){
                //         echo(" "."01000100");
                //     }
                //     elseif($tex[$i] == "E"){
                //         echo(" "."01000101");
                //     }
                //     elseif($tex[$i] == "F"){
                //         echo(" "."01000110");
                //     }
                //     elseif($tex[$i] == "G"){
                //         echo(" "."01000111");
                //     }
                //     elseif($tex[$i] == "H"){
                //         echo(" "."01001000");
                //     }
                //     elseif($tex[$i] == "I"){
                //         echo(" "."01001001");
                //     }
                //     elseif($tex[$i] == "J"){
                //         echo(" "."01001010");
                //     }
                //     elseif($tex[$i] == "K"){
                //         echo(" "."01001011");
                //     }
                //     elseif($tex[$i] == "L"){
                //         echo(" "."01001100");
                //     }
                //     elseif($tex[$i] == "M"){
                //         echo(" "."01001101");
                //     }
                //     elseif($tex[$i] == "N"){
                //         echo(" "."01001110");
                //     }
                //     elseif($tex[$i] == "O"){
                //         echo(" "."01001111");
                //     }
                //     elseif($tex[$i] == "P"){
                //         echo(" "."01010000");
                //     }
                //     elseif($tex[$i] == "Q"){
                //         echo(" "."01010001");
                //     }
                //     elseif($tex[$i] == "R"){
                //         echo(" "."01010010");
                //     }
                //     elseif($tex[$i] == "S"){
                //         echo(" "."01010011");
                //     }
                //     elseif($tex[$i] == "T"){
                //         echo(" "."01010100");
                //     }
                //     elseif($tex[$i] == "U"){
                //         echo(" "."01010101");
                //     }
                //     elseif($tex[$i] == "V"){
                //         echo(" "."01010110");
                //     }
                //     elseif($tex[$i] == "W"){
                //         echo(" "."01010111");
                //     }
                //     elseif($tex[$i] == "X"){
                //         echo(" "."01011000");
                //     }
                //     elseif($tex[$i] == "Y"){
                //         echo(" "."01011001");
                //     }
                //     elseif($tex[$i] == "Z"){
                //         echo(" "."01011010");
                //     }


                    
                //     elseif($tex[$i] == "a"){
                //         echo(" "."01100001");
                //     }
                //     elseif($tex[$i] == "b"){
                //         echo(" "."01100010");
                //     }
                //     elseif($tex[$i] == "c"){
                //         echo(" "."01100011");
                //     }
                //     elseif($tex[$i] == "d"){
                //         echo(" "."01100100");
                //     }
                //     elseif($tex[$i] == "e"){
                //         echo(" "."01100101");
                //     }
                //     elseif($tex[$i] == "f"){
                //         echo(" "."01100110");
                //     }
                //     elseif($tex[$i] == "g"){
                //         echo(" "."01100111");
                //     }
                //     elseif($tex[$i] == "h"){
                //         echo(" "."01101000");
                //     }
                //     elseif($tex[$i] == "i"){
                //         echo(" "."01101001");
                //     }
                //     elseif($tex[$i] == "j"){
                //         echo(" "."01101010");
                //     }
                //     elseif($tex[$i] == "k"){
                //         echo(" "."01101011");
                //     }
                //     elseif($tex[$i] == "l"){
                //         echo(" "."01101100");
                //     }
                //     elseif($tex[$i] == "m"){
                //         echo(" "."01101101");
                //     }
                //     elseif($tex[$i] == "n"){
                //         echo(" "."01101110");
                //     }
                //     elseif($tex[$i] == "o"){
                //         echo(" "."01101111");
                //     }
                //     elseif($tex[$i] == "p"){
                //         echo(" "."01110000");
                //     }
                //     elseif($tex[$i] == "q"){
                //         echo(" "."01110001");
                //     }
                //     elseif($tex[$i] == "r"){
                //         echo(" "."01110010");
                //     }
                //     elseif($tex[$i] == "s"){
                //         echo(" "."01110011");
                //     }
                //     elseif($tex[$i] == "t"){
                //         echo(" "."01110100");
                //     }
                //     elseif($tex[$i] == "u"){
                //         echo(" "."01110101");
                //     }
                //     elseif($tex[$i] == "v"){
                //         echo(" "."01110110");
                //     }
                //     elseif($tex[$i] == "w"){
                //         echo(" "."01110111");
                //     }
                //     elseif($tex[$i] == "x"){
                //         echo(" "."01111000");
                //     }
                //     elseif($tex[$i] == "y"){
                //         echo(" "."01111001");
                //     }
                //     elseif($tex[$i] == "z"){
                //         echo(" "."01111010");
                //     }
                // }
            
            
        
    }
        
    