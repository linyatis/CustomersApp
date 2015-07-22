package br.com.caelum.vraptor.angularexample.dao;

import java.util.List;

import br.com.caelum.vraptor.angularexample.model.Customer;

public interface CustomerDAO {

	void add(Customer customer);

	void update(Customer customer);

	void delete(Long id);

	List<Customer> listAll();

}
