
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uuid
from datetime import datetime
import logging

# Налаштування логування
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("autobazar-api")

app = FastAPI(title="AutoBazar CZ API")

# Налаштування CORS для підключення фронтенду
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Моделі даних
class Car(BaseModel):
    id: Optional[str] = None
    brand: str
    model: str
    year: int
    price: float
    mileage: int
    engine: str
    transmission: str
    fuelType: str
    location: str
    lat: Optional[float] = None
    lng: Optional[float] = None
    imageUrl: str
    description: str
    createdAt: Optional[str] = None

# Тимчасова база даних в оперативній пам'яті
cars_db: List[Car] = [
    Car(
        id="1",
        brand="Skoda",
        model="Octavia RS",
        year=2022,
        price=32000,
        mileage=22000,
        engine="2.0 TSI",
        transmission="Automatic",
        fuelType="Petrol",
        location="Прага",
        lat=50.0755,
        lng=14.4378,
        imageUrl="https://images.unsplash.com/photo-1606152421802-db97b9c7a11b",
        description="Ідеальний стан, офіційний сервіс.",
        createdAt="2023-10-01"
    ),
    Car(
        id="2",
        brand="Audi",
        model="A6 Avant",
        year=2020,
        price=42000,
        mileage=45000,
        engine="2.0L TDI",
        transmission="Automatic",
        fuelType="Diesel",
        location="Брно",
        lat=49.1951,
        lng=16.6068,
        imageUrl="https://images.unsplash.com/photo-1542281286-9e0a16bb7366",
        description="Преміальний комфорт, пневмопідвіска.",
        createdAt="2023-09-25"
    )
]

@app.middleware("http")
async def log_requests(request: Request, call_next):
    logger.info(f"Incoming request: {request.method} {request.url}")
    response = await call_next(request)
    logger.info(f"Response status: {response.status_code}")
    return response

@app.get("/")
async def root():
    return {"message": "AutoBazar CZ API is running", "status": "ok"}

@app.get("/api/cars", response_model=List[Car])
async def get_cars():
    return cars_db

@app.get("/api/cars/{car_id}", response_model=Car)
async def get_car(car_id: str):
    for car in cars_db:
        if car.id == car_id:
            return car
    raise HTTPException(status_code=404, detail="Car not found")

@app.post("/api/cars", response_model=Car)
async def create_car(car: Car):
    car.id = str(uuid.uuid4())
    car.createdAt = datetime.now().isoformat()
    # Mock some default coordinates if not provided for map functionality
    if not car.lat:
        car.lat = 50.0755
        car.lng = 14.4378
    cars_db.insert(0, car)
    logger.info(f"Created new car listing: {car.brand} {car.model}")
    return car

@app.get("/api/stats")
async def get_stats():
    return {
        "market_trend": "+1.2%",
        "avg_prices": [
            {"brand": "Skoda", "price": 15400},
            {"brand": "BMW", "price": 38500},
            {"brand": "Audi", "price": 18200}
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
