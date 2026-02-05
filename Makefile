.PHONY: test run clean

# Run tests
test:
	python3 -m unittest test_calculator.py -v

# Run the calculator demo
run:
	python3 calculator.py

# Clean up Python cache files
clean:
	find . -type d -name __pycache__ -exec rm -rf {} + 2>/dev/null || true
	find . -type f -name "*.pyc" -delete

# Run all checks
all: test run
