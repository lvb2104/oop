#include <iostream>

class Vehicle // interface = 1 class có tất cả function là pure virtual function
{
protected:
    std::string modelName;
public:
    virtual std::string getModelName() = 0;

    virtual void setModelName(std::string name) = 0;

    virtual void run() = 0;
};

class Car : public Vehicle
{
private:
    std::string ownerName;
    Engine engine;
public:
    Car()
    {
        std::cout << "Create a car ...\n";
    }
    void run() override
    {
        std::cout << "A car is running ... \n";
    }

    void setModelName(std::string name)
    {
        modelName = name;
    }

    std::string getModelName()
    {
        return modelName;
    }
};

class Truck : public Vehicle
{
private:
    int expirationYear;
public:
    Truck()
    {
        std::cout << "Create a truck ...\n";
    }
    void run() override
    {
        std::cout << "A truck is running ...\n";
    }

    void setModelName(std::string name)
    {
        modelName = name;
    }

    std::string getModelName()
    {
        return modelName;
    }
};

class Motorbike : public Vehicle
{
public:
    void run() override
    {
        std::cout << "A motorbike is running ...\n";
    }
    
    void setModelName(std::string name)
    {
        modelName = name;
    }

    std::string getModelName()
    {
        return modelName;
    }
};

class Person
{
private:
    Vehicle *vehicle;
    std::string name;
public:
    void setVehicle(Vehicle *v)
    {
        vehicle = v;
    }
};

class Engine
{

};

class Checker {};

int main()
{
    Vehicle *vehicle = new Car();
    Person *person = new Person();
    person->setVehicle(vehicle);
    return 0;
}
