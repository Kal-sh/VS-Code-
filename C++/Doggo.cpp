#include <bits/stdc++.h>
using namespace std;
class Dog{
    public:
    string Dogname;
    string Breed;
    string Color;
    string Gender;
    string Weight;

        void printdetails(){
            cout<<"\nDog Breed     "<<Breed;
            cout<<"\nDog Color     "<<Color;
            cout<<"\nDog Gender    "<<Gender;
            cout<<"\nDog Weight    "<<Weight;
        };

};

    int main(){
        Dog object1;

        char name[50];
        char Dogname[50];
        char Breed[50];
        char Color[50];
        char Gender[50];
        char Weight[50];
    cout<<"Please Enter the Details: \n";
    cout<<"name: ";
    cin.getline(name, 50);
    cout<<"Breed: ";
    cin.getline(Breed, 50);
    cout<<"Color: ";
    cin.getline(Color, 50);
    cout<<"Gender: ";
    cin.getline(Gender, 50);
    cout<<"Weight: ";
    cin.getline(Weight, 50);

        object1.Dogname = name;
        object1.Breed = Breed;
        object1.Color = Color;
        object1.Gender = Gender;
        object1.Weight = Weight;
        object1.printdetails();
        return 0;

    }