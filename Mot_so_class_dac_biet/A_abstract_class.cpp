#include <iostream>

class Vehicle // -> abstract class
{
private:
    std::string modelName;
public:
    Vehicle()
    {
        std::cout << "Create a vehicle ...\n";
    }

    std::string getModelName()
    {
        return modelName;
    }

    void setModelName(std::string name)
    {
        modelName = name;
    }

    virtual void run() = 0; // bắt buộc có lớp dấn xuất ở child-class
};

class Car : public Vehicle
{
private:
    std::string ownerName;
public:
    Car()
    {
        std::cout << "Create a car ...\n";
    }
    void run() override
    {
        std::cout << "A car is running ... \n";
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
};

class Motorbike : public Vehicle
{
public:
    void run() override
    {
        std::cout << "A motorbike is running ...\n";
    }
};

int main()
{
    Vehicle *vehicleList[3]; // Khai con tro kieu Vehicle, khong khai bao object Vehicle vi day la abstract class -> khong the khoi tao (vi la ao? ma sao create duoc kkk)
    vehicleList[0] = new Car();
    vehicleList[1] = new Motorbike();
    vehicleList[2] = new Truck();
    for (int i = 0; i < 3; i++)
    {
        vehicleList[i]->run();
    }
    return 0;
}